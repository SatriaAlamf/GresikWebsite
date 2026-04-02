"use client";

import React from "react";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  ComposedChart,
} from "recharts";
import { CHART_COLORS } from "@/lib/constants";

interface LineChartProps {
  data: Array<{
    name: string;
    value: number;
    [key: string]: any;
  }>;
  dataKeys?: string[];
  showGrid?: boolean;
  showArea?: boolean;
  showLegend?: boolean;
  height?: number;
  colors?: string[];
}

export function LineChart({
  data,
  dataKeys = ["value"],
  showGrid = true,
  showArea = false,
  showLegend = true,
  height = 300,
  colors = [CHART_COLORS.primary, CHART_COLORS.secondary, CHART_COLORS.accent],
}: LineChartProps) {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-elevation-3 border border-gray-200">
          <p className="font-semibold text-navy mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-sm text-charcoal">
                {entry.name}:{" "}
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                }).format(entry.value)}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  const Chart = showArea ? ComposedChart : RechartsLineChart;

  return (
    <ResponsiveContainer width="100%" height={height}>
      <Chart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        {showGrid && (
          <CartesianGrid strokeDasharray="3 3" stroke="#E8DCC4" opacity={0.5} />
        )}
        <XAxis
          dataKey="name"
          stroke="#333333"
          style={{ fontSize: "12px" }}
        />
        <YAxis
          stroke="#333333"
          style={{ fontSize: "12px" }}
          tickFormatter={(value) =>
            new Intl.NumberFormat("id-ID", {
              notation: "compact",
              compactDisplay: "short",
            }).format(value)
          }
        />
        <Tooltip content={<CustomTooltip />} />
        {showLegend && <Legend />}
        {dataKeys.map((key, index) => (
          <React.Fragment key={key}>
            {showArea && (
              <Area
                type="monotone"
                dataKey={key}
                fill={colors[index % colors.length]}
                fillOpacity={0.1}
                stroke="none"
              />
            )}
            <Line
              type="monotone"
              dataKey={key}
              stroke={colors[index % colors.length]}
              strokeWidth={3}
              dot={{ fill: colors[index % colors.length], r: 4 }}
              activeDot={{ r: 6 }}
              animationBegin={0}
              animationDuration={800}
            />
          </React.Fragment>
        ))}
      </Chart>
    </ResponsiveContainer>
  );
}
