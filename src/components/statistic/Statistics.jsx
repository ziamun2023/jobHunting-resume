import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../public/82662-student.json";

const data = [
    {
      subject: 'Assignment 1',
      A: 120,
      B: 110,
      fullMark: 60,
    },
    {
      subject: 'Assignment 2',
      A: 98,
      B: 130,
      fullMark: 59,
    },
    {
      subject: 'Assignment 3',
      A: 86,
      B: 130,
      fullMark: 60,
    },
    {
      subject: 'Assignment 4',
      A: 99,
      B: 100,
      fullMark: 60,
    },
    {
      subject: 'Assignment 5',
      A: 85,
      B: 90,
      fullMark: 55,
    },
    {
      subject: 'Assignment 6',
      A: 65,
      B: 85,
      fullMark: 60,
    },
  ];
  
export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/simple-radar-chart-rjoc6';
  

  render() {
    return (
        <>
         <p className='text-3xl my-8'>Assignmetn Marks</p>

<div className='grid grid-cols-2 mx-28'>
     
     <div style={{ width: '100%', height: 500 }}>
     <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
         </div>
         <div className='w-96 ms-16 ps-12 mt-5'>
         <Lottie  animationData={groovyWalkAnimation} loop={true} />
         </div>
       </div>
        
        </>
       
  
    );
  }
}


