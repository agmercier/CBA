import { Box, Heading } from "@chakra-ui/react";
import { Handle, Position } from "reactflow";
import { NodeType } from "../../../hooks/useNodeTypes";

interface Props {
  data: { lable: string; nodeType: NodeType };
  isConnectable: boolean;
}
const DynamicNode = ({ data, isConnectable }: Props) => {
  return (
    <Box className={"node " + data.nodeType.type}>
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
