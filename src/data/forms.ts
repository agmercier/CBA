export default [
  {
    nodeType: "data",
    params: [
      { key: "Dataset", value: "MNIST" },
      { key: "Number of Runs", value: 30 },
      { key: "optimiser", value: ["adam", "linear", "matrix"] },
    ],
  },
  {
    nodeType: "model",
    params: [
      { key: "Model", value: "Simple NN" },
      { key: "Number of Runs", value: 50 },
      { key: "Optimiser", value: ["adam", "linear", "matrix"] },
    ],
  },
  {
    nodeType: "attack",
    params: [
      { key: "Model", value: "Simple NN" },
      { key: "Number of Runs", value: 50 },
      { key: "Optimiser", value: ["adam", "linear", "matrix"] },
    ],
  },
  {
    nodeType: "defence",
    params: [
      { key: "Model", value: "Simple NN" },
      { key: "Number of Runs", value: 50 },
      { key: "Optimiser", value: ["adam", "linear", "matrix"] },
    ],
  },
  {
    nodeType: "result",
    params: [
      { key: "Model", value: "Simple NN" },
      { key: "Number of Runs", value: 50 },
      { key: "Optimiser", value: ["adam", "linear", "matrix"] },
    ],
  },
];
