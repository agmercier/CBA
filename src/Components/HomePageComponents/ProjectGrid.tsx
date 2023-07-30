import { SimpleGrid } from "@chakra-ui/react";
import useProjects, { Project } from "../../hooks/useProjects";
import ProjectCardContainer from "./ProjectCardContainer";
import ProjectCard from "./ProjectCard";

/**
 * List projects as cards
 */

interface Props {
  setCurrentProject: (project: Project) => void;
}

const ProjectGrid = ({ setCurrentProject }: Props) => {
  //Get projects
  const { data, error, isLoading } = useProjects();
  return (
    <SimpleGrid
      columns={
        /*Amount of colums displayed depending on size of screen*/ {
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }
      }
      padding={"10px"}
      spacing={6}
    >
      {data.map((project) => (
        <ProjectCardContainer key={project.id} /* Set size of card */>
          <ProjectCard
            project={project}
            setCurrentProject={setCurrentProject}
          />
        </ProjectCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default ProjectGrid;
