import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer} from 'recharts';
import { getSaveCard } from '../Utility/LocalStorage';

const Statistics = () => {
    const cards = useLoaderData();
    const myDonation = getSaveCard();

    const data = [
        { name: 'Total Donation', donations: cards.length - myDonation.length },
        { name: 'My donation', donations: myDonation.length }
    ];
    const COLORS = ['#FF444A', '#00C49F'];

    const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>);
    };
 
    return (
        <div className='flex justify-center items-center'>
            <ResponsiveContainer width={400} height={400}>
             <PieChart width={300} height={300}>
            <Pie data={data}
            cx='50%'
            cy = '50%'
            labelLine= {false}
            label= {renderCustomizedLabel}
            dataKey="donations" 
            outerRadius={150} 
            fill="#8884d8" > 
            {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip/>
            <Legend/>
           
        </PieChart>
        </ResponsiveContainer>

        </div>
    );
};

export default Statistics;


