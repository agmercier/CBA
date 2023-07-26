import { Box, Heading } from "@chakra-ui/react";
import { Handle, Position } from "reactflow";

interface Props {
  data: {};
  isConnectable: boolean;
}
const ResultNode = ({ data, isConnectable }: Props) => {
  return (
    <Box className="node result">
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
      <Heading size={"md"}>Result</Heading>
      <Handle
        type="target"
        position={Position.Right}
        id="c"
        isConnectable={isConnectable}
      />
      <Handle
        type="target"
        position={Position.Bottom}
        id="d"
        isConnectable={isConnectable}
      />
    </Box>
  );
};
export default ResultNode;
