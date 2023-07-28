import { Box, Heading } from "@chakra-ui/react";
import { NodeType } from "../../../hooks/useNodeTypes";
interface Props {
  onDragStart: (event: React.DragEvent<HTMLDivElement>, type: string) => void;
  nodeType: NodeType;
}

const NodeContainer = ({ onDragStart, nodeType }: Props) => {
  return (
    <Box
      className={"node " + nodeType.type}
      onDragStart={(event) => onDragStart(event, nodeType.slug)}
      draggable
    >
      <Heading size={"md"}>{nodeType.lable}</Heading>
    </Box>
  );
};

export default NodeContainer;
