import React, { useState } from 'react'
import { Line } from "react-chartjs-2"

function LineGraph() {
    const [data, setData] =useState({});
// 
    return (
        <div className='linegraph'>
            <Line 
                data
                options
            />
        </div>
    )
}

export default LineGraph
