import forms from "../data/forms";

export interface Param {
  key: string;
  value: string | number | string[] | number[];
}

export interface Form {
  nodeType: string;
  params: Param[];
}

const useForms = () => {
  return { data: forms, isLoading: false, error: null };
};

export default useForms;
