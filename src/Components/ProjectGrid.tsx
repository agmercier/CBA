import { SimpleGrid } from "@chakra-ui/react";
import useProjects from "../hooks/useProjects";
import ProjectCardContainer from "./ProjectCardContainer";
import ProjectCard from "./ProjectCard";

const ProjectGrid = () => {
  const { data, error, isLoading } = useProjects();
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding={"10px"}
      spacing={6}
    >
      {data.map((project) => (
        <ProjectCardContainer key={project.id}>
          <ProjectCard project={project} />
        </ProjectCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default ProjectGrid;
