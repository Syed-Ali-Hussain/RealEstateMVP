import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ConversionFunnel } from "@/types";

interface ConversionFunnelChartProps {
  data: ConversionFunnel[];
}

export function ConversionFunnelChart({ data }: ConversionFunnelChartProps) {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle>90-Day Conversion Funnel</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} layout="horizontal">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" domain={[0, 100]} />
            <YAxis dataKey="stage" type="category" />
            <Tooltip
              formatter={(value: number, name: string) => [
                `${value}%`,
                'Conversion Rate'
              ]}
            />
            <Bar
              dataKey="percentage"
              fill="hsl(var(--primary))"
              radius={[0, 4, 4, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}