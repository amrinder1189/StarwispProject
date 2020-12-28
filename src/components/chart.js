import React from 'react'
import Img from '../img/m.png'

const Chart =()=>{

    return(

        <div className='chart-box'>
        <div className='box-1'>
            <h1 className='sales-report'><b>Sales Report</b> September 2021</h1>
            <img className='img-graph' src={Img} />
        </div>
        <div className='box-2'>
        <h1 className='sales-report-year'>17 Sep</h1>
        <div className='revenu-box'>
            <p>$1,204.33</p>
            <small>revenue</small>
        </div>
        <div className='revenu-boxx'>
            <p>33</p>
            <small>Quatations</small>
        </div>
        </div>

        


        </div>

    )}


export default Chart;