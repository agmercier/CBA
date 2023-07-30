import {
  Button,
  Grid,
  GridItem,
  Heading,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import NodeContainer from "./NodeContainer";
import useNodeTypes from "../../../hooks/useNodeTypes";
import useNodeCategories from "../../../hooks/useNodeCategories";

/**
 * Displayes available nodes to be dragged into the flowchart.
 * A list of buttons displays the multiple node types.
 * Divided into:
 * Header
 * Buttons with node categories | List of nodes
 */

const NodeBar = () => {
  //Category of nodes shown
  const [selectedNodeList, setSelectedNodeList] = useState("data");

  //Get list of all nodes [NodeType]
  const {
    data: nodeTypeList,
    isLoading: isLoadongNT,
    error: errorNT,
  } = useNodeTypes();

  //Get list of categories of nodes [string]
  const {
    data: nodeCategories,
    isLoading: isLoadingNC,
    error: errorNC,
  } = useNodeCategories();

  const onDragStart = (
    event: {
      dataTransfer: {
        setData: (arg0: string, arg1: any) => void;
        effectAllowed: string;
      };
    },
    nodeType: any //care confusion, this is reactFlow node type not the one defined in hook useNodeType
  ) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <aside color="black">
      <Grid
        templateAreas={`"header header" 
                  "cat main"`}
        templateColumns={"35% 65%"} // width division of columns
        templateRows={"60px 1fr"}
      >
        <GridItem area={"header"}>
          <Heading paddingBottom={5} alignContent={"left"}>
            Nodes:
          </Heading>
        </GridItem>
        {/* Category Buttons, dynamically added from list */}
        <GridItem area={"cat"} borderRight={"2px"} paddingRight={2}>
          <Stack direction="column" spacing={4} align="left">
            {nodeCategories.map((cat) => (
              <Button
                variant="ghost"
                borderLeft={selectedNodeList === cat ? "2px" : "0px"}
                onClick={() => setSelectedNodeList(cat)}
              >
                {cat}
              </Button>
            ))}
          </Stack>
        </GridItem>
        {/* Different nodes: Dynamically added from list and filtered to match category */}
        <GridItem area={"main"}>
          <VStack spacing={4}>
            {nodeTypeList
              .filter((node) => node.type === selectedNodeList)
              .map((node) => (
                <NodeContainer nodeType={node} onDragStart={onDragStart} />
              ))}
          </VStack>
        </GridItem>
      </Grid>
    </aside>
  );
};

export default NodeBar;
