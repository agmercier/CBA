import { useState } from "react";
import HomePage from "./Components/HomePage";
import ProjectPage from "./Components/ProjectPage";
import { Project } from "./hooks/useProjects";

//HomePage displays the created projects and the project managment options
//Once a project is selected it is stored in the 'currentProject', taking the user to the ProjectPage
//ProjectPage is where user can work on their project, it includes a flow chart to build their pipeline

function App() {
  //Store current project a user is working on
  const [currentProject, setCurrentProject] = useState<Project | null>(null);

  //if a project is selected (not null), bring to ProjectPage
  if (currentProject)
    return (
      <ProjectPage
        project={currentProject}
        goHomePage={() => setCurrentProject(null)}
      />
    );
  return (
    //if currentProject is null, display HomePage
    <HomePage setCurrentProject={(project) => setCurrentProject(project)} />
  );
}

export default App;
