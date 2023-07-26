import { useState } from "react";
import HomePage from "./Components/HomePage";
import ProjectPage from "./Components/ProjectPage";
import { Project } from "./hooks/useProjects";

function App() {
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  if (currentProject)
    return (
      <ProjectPage
        project={currentProject}
        goHomePage={() => setCurrentProject(null)}
      />
    );
  return (
    <HomePage setCurrentProject={(project) => setCurrentProject(project)} />
  );
}

export default App;
