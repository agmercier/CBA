import { Box, Heading } from "@chakra-ui/react";
import { Handle, Position } from "reactflow";
import { NodeType } from "../../../hooks/useNodeTypes";

/**
 * Custom node: every node in flowchart is fitted from this one. Node information is passed through nodeType object in 'data' field
 */

interface Props {
  data: { lable: string; nodeType: NodeType };
  isConnectable: boolean;
}
const DynamicNode = ({ data, isConnectable }: Props) => {
  return (
    <Box className={"node " + data.nodeType.type}>
      {/* hande is a connection point 
      A connection can only be made between a target handle and a source handle*/}
      <Handle
        id="a"
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <Handle
        id="b"
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
      />
      <Heading size={"md"}>{data.nodeType.lable}</Heading>
      <Handle
        type="source"
        position={Position.Right}
        id="c"
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="d"
        isConnectable={isConnectable}
      />
    </Box>
  );
};

export default DynamicNode;
