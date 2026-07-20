import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  Area,
  XAxis,
  YAxis,
} from 'recharts';

type BaseChartProps = {
  data: { value: number | undefined }[];
  fill: string;
  stroke: string;
};

export function BaseChart(props: BaseChartProps) {
  return (
    <ResponsiveContainer width={'100%'} height={'100%'}>
      <AreaChart data={props.data}>
        <CartesianGrid
          stroke="rgba(255, 255, 255, 0.04)"
          strokeDasharray="3 3"
          fill="transparent"
        />
        <Area
          fillOpacity={0.15}
          fill={props.fill}
          stroke={props.stroke}
          strokeWidth={2}
          type="monotone"
          dataKey="value"
          isAnimationActive={false}
        />
        <XAxis stroke="transparent" height={0} />
        <YAxis domain={[0, 100]} stroke="transparent" width={0} />
      </AreaChart>
    </ResponsiveContainer>
  );
}