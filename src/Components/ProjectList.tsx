import { Box, HStack, Heading, List, ListItem } from "@chakra-ui/react";
import useProjects from "../hooks/useProjects";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProjectList = () => {
  const { data, error, isLoading } = useProjects();
  return (
    <List>
      <ListItem>
        <Box paddingTop={3}>
          <HStack padding={2} justifyContent={"space-between"}>
            <Box width={500}>
              <Heading size={"lg"}>Project Name:</Heading>
            </Box>
            <Box width={200}>
              <Heading size={"lg"}>Date:</Heading>
            </Box>
            <Box width={50}>
              <Heading size={"lg"}></Heading>
            </Box>
          </HStack>
        </Box>
      </ListItem>
      {data.map((project) => (
        <ListItem key={project.id}>
          <Box borderBottom={"1px"} borderTop={"1px"}>
            <HStack padding={2} justifyContent={"space-between"}>
              <Box width={500}>
                <Heading size={"md"}>{project.name}</Heading>
              </Box>
              <Box width={200}>
                <Heading size={"sm"}>{project.date.toDateString()}</Heading>
              </Box>
              <Box width={50}>
                {project.favorite ? <AiFillStar /> : <AiOutlineStar />}
              </Box>
            </HStack>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default ProjectList;
