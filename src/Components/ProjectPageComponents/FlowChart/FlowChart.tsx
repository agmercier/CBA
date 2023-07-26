import {
  Node,
  Edge,
  Connection,
  EdgeChange,
  NodeChange,
} from "@reactflow/core";
import { useCallback, useRef, useState } from "react";
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  ReactFlowProvider,
  ReactFlowInstance,
} from "reactflow";
import "reactflow/dist/style.css";
import NodeBar from "./NodeBar";
import DataNode from "./Nodes/DataNode";
import ModelNode from "./Nodes/ModelNode";
import ResultNode from "./Nodes/ResultNode";
import AttackNode from "./Nodes/AttackNode";
import DefenceNode from "./Nodes/DefenceNode";
import NodeForm from "./NodeForm";

const nodeTypes = {
  data: DataNode,
  model: ModelNode,
  result: ResultNode,
  attack: AttackNode,
  defence: DefenceNode,
};

const initialNodes: Node[] = [];
const initialEdges: Edge[] = [];

let id = 0;
const getId = () => `node_${id++}`;

const FlowChart = () => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);

  //list of stored nodes and edges
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  //whenever a node is changed (draged, selected, removed)
  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  //whenever an edge is changed (draged, selected, removed)
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  //when connecting two nodes => makde an edge between them
  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null);

  //when draging over nodes to the interface
  const onDragOver = useCallback(
    (event: {
      preventDefault: () => void;
      dataTransfer: { dropEffect: string };
    }) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
    },
    []
  );

  //When droping nodes into the interface
  const onDrop = useCallback(
    (event: {
      preventDefault: () => void;
      dataTransfer: { getData: (arg0: string) => any };
      clientX: number;
      clientY: number;
    }) => {
      event.preventDefault();

      const reactFlowBounds =
        reactFlowWrapper.current?.getBoundingClientRect() || null;

      const type = event.dataTransfer.getData("application/reactflow");

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance?.project({
        x: event.clientX - (reactFlowBounds?.left || 0),
        y: event.clientY - (reactFlowBounds?.top || 0),
      }) || { x: 0, y: 0 };

      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  //state variable to hyperparameter pane:
  //Pane will be visible if paramNode is not null and show the hyper-parameters of paramNode
  const [paramNode, setParamNode] = useState<Node | null>(null);
  return (
    <div style={{ width: "95vw", height: "90vh" }}>
      <div className="flow">
        <ReactFlowProvider>
          <NodeBar />
          <div className="reactflow-wrapper" ref={reactFlowWrapper}>
            <ReactFlow
              nodeTypes={nodeTypes}
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onInit={setReactFlowInstance}
              proOptions={{ hideAttribution: true }}
              onDrop={onDrop}
              onDragOver={onDragOver}
              multiSelectionKeyCode={"Control"}
              deleteKeyCode={["Backspace", "Delete"]}
              //HyperParameter window managment
              onNodeDoubleClick={(event, node) => setParamNode(node)}
              onPaneClick={() => setParamNode(null)}
            >
              <Controls />
              <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
            </ReactFlow>
          </div>
          {paramNode && <NodeForm node={paramNode} />}
        </ReactFlowProvider>
      </div>
    </div>
  );
};

export default FlowChart;
