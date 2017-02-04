import React, { Component } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default class GpaChart extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className='chart'>
        <ResponsiveContainer aspect={1}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" strokeDasharray="1 3" />
            <Bar type="monotone" dataKey="value" fill='DeepSkyBlue' barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
