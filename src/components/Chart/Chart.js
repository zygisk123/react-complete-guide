import ChartBar from './ChartBar';
import './Chart.css'

const Chart = (props) =>
{

    let max = 0;

    const dataPointValues = props.dataPoints.map(dataPoint => {max +=dataPoint.value});

    const totalMax = Math.max(...dataPointValues);
console.log('totalMax: ' + max)
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