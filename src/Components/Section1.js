import React from 'react'

function Section1({handleChange}) {
  return (
    <div className="section1">
      <div className="header">
        <h2>Spotings Appointment Sheduler</h2>
      </div>
      <div className="tracker">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="time">
        <h2>select date for appointment</h2>
        <div className="start">
          <div className="flex">
            <span>from</span>
            <input type="date" name="fromDate"/>
          </div>
          <div className="flex">
            <span>time</span>
            <input type="time" name="timeFrom" id=""/>
          </div>
        </div>
        <div className="to">
          <div className="flex">
            <span>to</span>
            <input type="date" name="fromDate"/>
          </div>
          <div className="flex">
            <span>time</span>
            <input type="time" name="timeTo" id=""/>
          </div>
        </div>
      </div>
      <div className="descreption">
        <input type="text"placeholder="description"/>
      </div>
      <div className="pageChange">
        <button onClick={()=> handleChange("prev")}>previous</button>
        <button onClick={()=> handleChange("next")}>next</button>
      </div>
    </div>
  )
}

export default Section1
