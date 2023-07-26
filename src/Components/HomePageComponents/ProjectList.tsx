import { Box, HStack, Heading, List, ListItem } from "@chakra-ui/react";
import useProjects, { Project } from "../../hooks/useProjects";
import ProjectListItem from "./ProjectListItem";

interface Props {
  setCurrentProject: (project: Project) => void;
}

const ProjectList = ({ setCurrentProject }: Props) => {
  //fetch projects
  const { data, error, isLoading } = useProjects();
  //division of space for each column: Project name | Date | (Favorite & File Managment buttons)
  const columns_width = [600, 200, 100];
  return (
    <List>
      {/* Column Titles */}
      <ListItem>
        <Box paddingTop={3}>
          <HStack padding={2} justifyContent={"space-between"}>
            <Box width={columns_width[0]}>
              <Heading size={"lg"}>Project Name:</Heading>
            </Box>
            <Box width={columns_width[1]}>
              <Heading size={"lg"}>Date:</Heading>
            </Box>
            <Box width={columns_width[2]}>
              <Heading size={"lg"}></Heading>
            </Box>
          </HStack>
        </Box>
      </ListItem>
      {/* List item for each project */}
      {data.map((project) => (
        <ProjectListItem
          key={project.id}
          project={project}
          setCurrentProject={setCurrentProject}
          columns_width={columns_width}
        />
      ))}
    </List>
  );
};

export default ProjectList;
