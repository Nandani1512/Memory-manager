import { useMemo } from 'react';
import { BaseChart } from './BaseChart';

export type ChartProps = {
  data: number[];
  maxDataPoints: number;
  selectedView: 'CPU' | 'RAM' | 'STORAGE' | 'NETWORK' | 'BATTERY';
};

export const COLOR_MAP = {
  CPU: {
    stroke: '#5DD4EE',
    fill: '#5DD4EE',
  },
  RAM: {
    stroke: '#F59E0B',
    fill: '#F59E0B',
  },
  STORAGE: {
    stroke: '#34D399',
    fill: '#34D399',
  },
  NETWORK: {
    stroke: '#A78BFA',
    fill: '#A78BFA',
  },
  BATTERY: {
    stroke: '#F472B6',
    fill: '#F472B6',
  },
};

export function Chart(props: ChartProps) {
  const color = useMemo(
    () => COLOR_MAP[props.selectedView],
    [props.selectedView]
  );
  const preparedData = useMemo(() => {
    const points = props.data.map((point) => ({ value: point * 100 }));
    return [
      ...points,
      ...Array.from({ length: props.maxDataPoints - points.length }).map(
        () => ({ value: undefined })
      ),
    ];
  }, [props.data, props.maxDataPoints]);

  return (
    <BaseChart data={preparedData} fill={color.fill} stroke={color.stroke} />
  );
}