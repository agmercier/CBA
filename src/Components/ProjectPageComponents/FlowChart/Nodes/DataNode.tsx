import { Box, Heading } from "@chakra-ui/react";
import { Handle, Position } from "reactflow";

interface Props {
  data: {};
  isConnectable: boolean;
}

const DataNode = ({ data, isConnectable }: Props) => {
  return (
    <Box className="node data">
      <Handle
        id="a"
        type="source"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <Handle
        id="b"
        type="source"
        position={Position.Left}
        isConnectable={isConnectable}
      />
      <Heading size={"md"}>Data</Heading>
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

export default DataNode;
