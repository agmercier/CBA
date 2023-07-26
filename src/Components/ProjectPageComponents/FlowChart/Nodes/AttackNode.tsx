import { Box, Heading } from "@chakra-ui/react";
import { Handle, Position } from "reactflow";

interface Props {
  data: {};
  isConnectable: boolean;
}
const AttackNode = ({ data, isConnectable }: Props) => {
  return (
    <Box className="node attack">
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
      <Heading size={"md"}>Attack</Heading>
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

export default AttackNode;
