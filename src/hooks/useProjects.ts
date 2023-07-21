import projects from "../data/projects";

export interface Project {
  id: number;
  name: string;
}

const useProjects = () => {
  return { data: projects, isLoading: false, error: null };
};

export default useProjects;
