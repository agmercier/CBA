import {
  Box,
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

const NodeBar = () => {
  const [selectedNodeList, setSelectedNodeList] = useState("data");

  const { data, isLoading, error } = useNodeTypes();

  const nodeCategories = ["data", "model", "attack", "defence", "result"];

  const onDragStart = (
    event: {
      dataTransfer: {
        setData: (arg0: string, arg1: any) => void;
        effectAllowed: string;
      };
    },
    nodeType: any //sry for confusion, this is react node type not the one defined in hook useNodeType
  ) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <aside color="black">
      <Grid
        templateAreas={`"header header"
                  "nav main"`}
        templateColumns={"35% 65%"}
        templateRows={"60px 1fr"}
      >
        <GridItem area={"header"}>
          <Heading paddingBottom={5} alignContent={"left"}>
            Nodes:
          </Heading>
        </GridItem>
        <GridItem area={"nav"} borderRight={"2px"} paddingRight={2}>
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
        <GridItem area={"main"}>
          <VStack spacing={4}>
            {data
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
