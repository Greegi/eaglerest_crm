
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

interface PipelineDataItem {
  name: string;
  value: number;
}

interface PipelineChartProps {
  data: PipelineDataItem[];
  colors: string[];
}

const PipelineChart: React.FC<PipelineChartProps> = ({ data, colors }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Воронка продаж</CardTitle>
        <CardDescription>Распределение по этапам</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              fill="#ff9800"
              paddingAngle={5}
              dataKey="value"
              label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default PipelineChart;
