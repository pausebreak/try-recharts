import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { XAxis, YAxis, Line, CartesianGrid, Area, AreaChart, Tooltip,
    Legend,     ResponsiveContainer, Bar, ComposedChart } from 'recharts';

const data = [
      {name: 'Page A', xv: 2000, uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', xv: 3333, uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

class App extends Component {
  render() {
    return (

<div className="App">
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
  </div>

  <ComposedChart width={400} height={200} margin={{top: 20, bottom: 10}} data={data}>
    <XAxis dataKey="name"/>
    <YAxis/>
    <Legend/>
    <Line type="monotone" isAnimationActive={false} dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    <Line type="monotone" dataKey="xv" stroke="#000" />
    <Bar dataKey="uv" stackId="a" label fill="#82ca9d" isAnimationActive={false} />
    <Bar dataKey="xv" stackId="a" label />
    <Bar dataKey="pv" stackId="a" label fill="red" />
    <Tooltip/>
  </ComposedChart>

  <section>
   <ResponsiveContainer >
     <AreaChart data={data} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
			 <line stroke-dasharray="3 3" x="0" y="0" width="700" height="5" stroke="red" fill="none" x1="60" y1="493" x2="1020" y2="-4493"></line>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Area type='linear' dataKey='uv' stackId="1" stroke='#8884d8' fill='#8884d8' />
       <Area type='linear' dataKey='pv' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
       <Area type='linear' label dataKey='amt' stackId="1" stroke='#ffc658' fill='#ffc658' />
     </AreaChart>
    </ResponsiveContainer>
   </section>

</div>

    );
  }
}

// Area type 'basis' | 'basisClosed' | 'basisOpen' | 'linear' | 'linearClosed' | 'natural' | 'monotoneX' | 'monotoneY' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter' | Function

export default App;
