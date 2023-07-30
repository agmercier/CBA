import { Box, HStack, Heading, IconButton, ListItem } from "@chakra-ui/react";
import { Project } from "../../hooks/useProjects";
import FileOptions from "./FileOptions";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

/**
 * Display a project as a list item
 * Colums seperated as:
 * Project name | Date | Favorite button | File options button
 */

interface Props {
  //project to be displayed
  project: Project;
  setCurrentProject: (project: Project) => void;
  columns_width: number[];
}

const ProjectListItem = ({
  project,
  setCurrentProject,
  columns_width,
}: Props) => {
  return (
    <ListItem onDoubleClick={() => setCurrentProject(project)}>
      <Box borderBottom={"1px"} borderTop={"1px"}>
        <HStack padding={2} justifyContent={"space-between"}>
          <Box width={columns_width[0]}>
            <Heading size={"md"}>{project.name}</Heading>
          </Box>
          <Box width={columns_width[1]}>
            <Heading size={"sm"}>{project.date.toDateString()}</Heading>
          </Box>
          <Box width={columns_width[2]}>
            <HStack justifyContent={"space-between"}>
              {
                <IconButton
                  aria-label="Search database"
                  onClick={() => console.log("change favorite to: " + !project)}
                  icon={project.favorite ? <AiFillStar /> : <AiOutlineStar />}
                />
              }
              <FileOptions />
            </HStack>
          </Box>
        </HStack>
      </Box>
    </ListItem>
  );
};

export default ProjectListItem;
