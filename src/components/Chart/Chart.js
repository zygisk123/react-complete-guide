import ChartBar from './ChartBar';
import './Chart.css'

const Chart = (props) =>
{

    let max = 0;

    props.dataPoints.map((dataPoint) => {return max +=dataPoint.value});

    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint) =>
                (
                    <ChartBar
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={max}
                        label={dataPoint.label}
                    />
                )
            )}
        </div>
    );
}

export default Chart;