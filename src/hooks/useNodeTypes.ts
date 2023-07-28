import nodeTypes from "../data/nodeTypes";
export interface NodeType {
  id: number;
  lable: string;
  slug: string;
  type: string;
}

const useNodeTypes = () => {
  return { data: nodeTypes, isLoading: false, error: null };
};

export default useNodeTypes;
