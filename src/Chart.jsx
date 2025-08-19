import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '9:00', bpm: 75 },
  { time: '10:00', bpm: 80 },
  { time: '11:00', bpm: 85 },
  { time: '12:00', bpm: 92 },
  { time: '13:00', bpm: 88 },
  { time: '14:00', bpm: 83 },
  { time: '15:00', bpm: 79 },
];

const Chart = () => {
  return (
    <div style={{ width: '100%', height: '200px' }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={[60, 120]} />
          <Tooltip />
          <Line type="monotone" dataKey="bpm" stroke="#8884d8" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;