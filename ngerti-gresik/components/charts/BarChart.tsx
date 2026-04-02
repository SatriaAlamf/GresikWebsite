"use client";

import React from "react";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { CHART_COLORS } from "@/lib/constants";

interface BarChartProps {
  data: Array<{
    name: string;
    value: number;
    color?: string;
  }>;
  dataKey?: string;
  layout?: "horizontal" | "vertical";
  showGrid?: boolean;
  showLegend?: boolean;
  height?: number;
  barSize?: number;
}

export function BarChart({
  data,
  dataKey = "value",
  layout = "vertical",
  showGrid = true,
  showLegend = false,
  height = 400,
  barSize = 32,
}: BarChartProps) {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-elevation-3 border border-gray-200">
          <p className="font-semibold text-navy">{payload[0].payload.name}</p>
          <p className="text-sm text-charcoal">
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
            }).format(payload[0].value)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsBarChart
        data={data}
        layout={layout}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        {showGrid && (
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#E8DCC4"
            opacity={0.5}
          />
        )}
        {layout === "horizontal" ? (
          <>
            <XAxis
              dataKey="name"
              stroke="#333333"
              style={{ fontSize: "12px" }}
            />
            <YAxis stroke="#333333" style={{ fontSize: "12px" }} />
          </>
        ) : (
          <>
            <XAxis
              type="number"
              stroke="#333333"
              style={{ fontSize: "12px" }}
              tickFormatter={(value) =>
                new Intl.NumberFormat("id-ID", {
                  notation: "compact",
                  compactDisplay: "short",
                }).format(value)
              }
            />
            <YAxis
              dataKey="name"
              type="category"
              stroke="#333333"
              style={{ fontSize: "12px" }}
              width={120}
            />
          </>
        )}
        <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(0, 0, 0, 0.05)" }} />
        {showLegend && <Legend />}
        <Bar
          dataKey={dataKey}
          fill={CHART_COLORS.primary}
          radius={[0, 8, 8, 0]}
          barSize={barSize}
          animationBegin={0}
          animationDuration={800}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color || CHART_COLORS.primary} />
          ))}
        </Bar>
      </RechartsBarChart>
    </ResponsiveContainer>
  );
}
