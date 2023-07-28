import { Node, Edge } from "reactflow";
import projects from "../data/projects";

export interface Project {
  id: number;
  name: string;
  date: Date;
  favorite: boolean;
  flowchart?: {
    nodes: Node[];
    edges: Edge[];
  };
}

const useProjects = () => {
  return { data: projects, isLoading: false, error: null };
};

export default useProjects;
