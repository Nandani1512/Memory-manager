import { Chart } from '../Chart';

type StatCardProps = {
  title: string;
  view: View;
  subTitle: string;
  data: number[];
  isActive: boolean;
  onClick: () => void;
};

export function StatCard(props: StatCardProps) {
  return (
    <button
      className={`statCard ${props.isActive ? 'statCard--active' : ''}`}
      onClick={props.onClick}
    >
      <div className="statCard-header">
        <div className="statCard-title">{props.title}</div>
        <div className="statCard-subtitle">{props.subTitle}</div>
      </div>
      <div className="statCard-chart">
        <Chart selectedView={props.view} data={props.data} maxDataPoints={10} />
      </div>
    </button>
  );
}
