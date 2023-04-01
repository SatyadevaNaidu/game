import React from "react";
import { VictoryChart, VictoryArea, VictoryAxis, VictoryLegend } from "victory";

const CumulativeFlowGraph = ({ data }) => {
  const labels = Object.keys(data[0]).slice(1);
  const colors = ["#FF8C00", "#DC143C", "#4169E1", "#008000", "#FFD700"];

  const legendData = labels.map((label, index) => ({
    name: label,
    symbol: {
      fill: colors[index],
      type: "square"
    }
  }));

  return (
    <VictoryChart>
      <VictoryAxis
        tickFormat={(x) => `Iteration ${x}`}
        style={{
          axisLabel: { fontSize: 10, fill: "white" },
          tickLabels: { fontSize: 10, fill: "deeppink" },
          axis: { stroke: "blue", strokeWidth: 2, strokeDasharray: "4 4", strokeLinecap: "round" }
        }}
        label="X Axis"
      />
      <VictoryAxis
        dependentAxis
        style={{
          axisLabel: { fontSize: 10, fill: "white" },
          tickLabels: { fontSize: 10, fill: "deeppink" },
          axis: { stroke: "blue", strokeWidth: 2, strokeDasharray: "4 4", strokeLinecap: "round" }
        }}
        label="Y Axis"
      />
      {labels.map((label, index) => (
        <VictoryArea
          key={index}
          data={data.map((datum) => ({
            x: datum.date,
            y: datum[label]
          }))}
          style={{
            data: {
              fill: colors[index],
              stroke: colors[index],
              strokeWidth: 2
            }
          }}
        />
      ))}
      <VictoryLegend
        x={10}
        y={10}
        orientation="horizontal"
        gutter={10}
        data={legendData}
        style={{
          labels: { fontSize: 10, fill: "white" },
          title: { fill: "white" },
          border: { stroke: "white" },
          fill: "white"
        }}
      />
    </VictoryChart>
  );
};

export default CumulativeFlowGraph;
