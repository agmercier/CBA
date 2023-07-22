import projects from "../data/projects";

export interface Project {
  id: number;
  name: string;
  date: Date;
  favorite: boolean;
}

const useProjects = () => {
  return { data: projects, isLoading: false, error: null };
};

export default useProjects;
