import { Box, Heading } from "@chakra-ui/react";
import { NodeType } from "../../../hooks/useNodeTypes";

/**
 * Node box template that can be dragged into the flowchart
 */

interface Props {
  onDragStart: (event: React.DragEvent<HTMLDivElement>, type: string) => void;
  //Info of type of node
  nodeType: NodeType;
}

const NodeContainer = ({ onDragStart, nodeType }: Props) => {
  return (
    <Box
      className={"node " + nodeType.type} // styling
      onDragStart={(event) => onDragStart(event, nodeType.slug)}
      draggable
    >
      <Heading size={"md"}>{nodeType.lable}</Heading>
    </Box>
  );
};

export default NodeContainer;
