
import React from 'react';

import { useState } from 'react';
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement } from 'chart.js';
ChartJS.register(
    Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement
)



 


function LatestHits(props) {

    const { featured, months, latest, popular } = props.data || {}
    const [options, setoptions] = useState({
        layout: {
            padding: 17
        },
        plugins: {
            title: {
                display: true,
                text: ' Hits',
                position: 'left',
                color: "white",
            },
            legend: {
                labels: {
                    color: 'white',
                }
            },
        },
        scales: {
            y: {
                ticks: {
                    color: "white",
                    beginAtZero: true
                }
            },
            x: {
                ticks: {
                    color: "white",
                    beginAtZero: true
                }
            }
        }
    }
    )



 const [data , setData] = useState({
    labels :months,
    datasets : [
        
              {
                label: 'Featured',
                data:featured,
                borderColor: '#4bc0c0',
                tension : 0.4,
                pointstyle : 'rect'
                
              },
              {
                label: "Latest Hits",
                data: latest,
                borderColor: "#f35e7d",
                tension: 0.4,
                pointstyle: 'rect',
        
            }, 
            {
                label: "Popular",
                data: popular,
                borderColor: "#9966ff",
                tension: 0.5,
                pointstyle: 'rect',
        
            }
          
    ]
 })
 



    return (
        <>
            <div className='latesthit'>
              
                <Line data={data} options={options}  />
            </div>
        </>
    )
}
export default LatestHits;