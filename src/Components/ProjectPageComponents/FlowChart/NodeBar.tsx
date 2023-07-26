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

const NodeBar = () => {
  const [selectedNodeList, setSelectedNodeList] = useState("data");

  const onDragStart = (
    event: {
      dataTransfer: {
        setData: (arg0: string, arg1: any) => void;
        effectAllowed: string;
      };
    },
    nodeType: any
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
            <Button
              variant="ghost"
              borderLeft={selectedNodeList === "data" ? "2px" : "0px"}
              onClick={() => setSelectedNodeList("data")}
            >
              Data
            </Button>
            <Button
              variant="ghost"
              borderLeft={selectedNodeList === "model" ? "2px" : "0px"}
              onClick={() => setSelectedNodeList("model")}
            >
              Model
            </Button>
            <Button
              variant="ghost"
              borderLeft={selectedNodeList === "attack" ? "2px" : "0px"}
              onClick={() => setSelectedNodeList("attack")}
            >
              Attack
            </Button>
            <Button
              variant="ghost"
              borderLeft={selectedNodeList === "defence" ? "2px" : "0px"}
              onClick={() => setSelectedNodeList("defence")}
            >
              Defence
            </Button>
            <Button
              variant="ghost"
              borderLeft={selectedNodeList === "result" ? "2px" : "0px"}
              onClick={() => setSelectedNodeList("result")}
            >
              Result
            </Button>
          </Stack>
        </GridItem>
        <GridItem area={"main"}>
          <VStack spacing={4}>
            {selectedNodeList === "data" && (
              <Box
                className="node data"
                onDragStart={(event) => onDragStart(event, "data")}
                draggable
              >
                <Heading size={"md"}>Data</Heading>
              </Box>
            )}
            {selectedNodeList === "model" && (
              <Box
                className="node model"
                onDragStart={(event) => onDragStart(event, "model")}
                draggable
              >
                <Heading size={"md"}>Model</Heading>
              </Box>
            )}
            {selectedNodeList === "attack" && (
              <Box
                className="node attack"
                onDragStart={(event) => onDragStart(event, "attack")}
                draggable
              >
                <Heading size={"md"}>Attack</Heading>
              </Box>
            )}
            {selectedNodeList === "defence" && (
              <Box
                className="node defence"
                onDragStart={(event) => onDragStart(event, "defence")}
                draggable
              >
                <Heading size={"md"}>Defence</Heading>
              </Box>
            )}
            {selectedNodeList === "result" && (
              <Box
                className="node result"
                onDragStart={(event) => onDragStart(event, "result")}
                draggable
              >
                <Heading size={"md"}>Result</Heading>
              </Box>
            )}
          </VStack>
        </GridItem>
      </Grid>
    </aside>
  );
};

export default NodeBar;
