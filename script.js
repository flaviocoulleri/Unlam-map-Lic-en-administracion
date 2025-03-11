document.addEventListener("DOMContentLoaded", function () {
  const data = {
    nodes: [
      { id: "Álgebra y Geometría Analítica I" },
      { id: "Análisis Matemático I" },
      { id: "Física I" },
      { id: "Programación Inicial" },
      { id: "Bases de Datos" },
      { id: "Inteligencia Artificial" },
      { id: "Proyecto Final de Carrera" },
    ],
    links: [
      {
        source: "Álgebra y Geometría Analítica I",
        target: "Análisis Matemático I",
      },
      { source: "Análisis Matemático I", target: "Física I" },
      { source: "Programación Inicial", target: "Bases de Datos" },
      { source: "Bases de Datos", target: "Inteligencia Artificial" },
      {
        source: "Inteligencia Artificial",
        target: "Proyecto Final de Carrera",
      },
    ],
  };

  const config = {
    nodeHighlightBehavior: true,
    node: {
      color: "lightblue",
      size: 300,
      highlightStrokeColor: "blue",
    },
    link: {
      highlightColor: "lightblue",
    },
  };

  const GraphComponent = React.createElement(Graph, {
    id: "graph-id",
    data: data,
    config: config,
  });
  ReactDOM.render(GraphComponent, document.getElementById("root"));
});
