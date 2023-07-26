import { Grid, GridItem } from "@chakra-ui/react";
import TopBar from "./ProjectPageComponents/TopBar";
import FlowChart from "./ProjectPageComponents/FlowChart/FlowChart";
import { Project } from "../hooks/useProjects";

interface Props {
  project: Project;
  goHomePage: () => void;
}

const ProjectPage = ({ project, goHomePage }: Props) => {
  return (
    <Grid
      templateAreas={{
        base: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <TopBar projectName={project.name} goHomePage={goHomePage} />
      </GridItem>
      <GridItem area={"aside"}></GridItem>
      <GridItem area={"main"}>
        <FlowChart />
      </GridItem>
    </Grid>
  );
};

export default ProjectPage;
