import nodeCategories from "../data/nodeCategories";

const useNodeCategories = () => {
  return { data: nodeCategories, isLoading: false, error: null };
};

export default useNodeCategories;
