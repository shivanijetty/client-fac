import React from 'react'
import { useState } from 'react'
import './App.scss'

function WeeklyCalendar() {
  
  return(
    <div className="trello-master">
      <nav className="navbar app"> App Bar </nav>
      <nav className="navbar board"> Board Bar </nav>
      <div className="board-comlumns">        
      <div className="column">
        <header>Monday</header>
        <ul>
          <li>first</li>
          <li>second</li>
        </ul>
        <footer>Add a commitment</footer>
      </div>

      <div className="column">
        <header>Tuesday</header>
        <ul>
          <li>first</li>
          <li>second</li>
        </ul>
        <footer>Add a commitment</footer>
      </div>

      <div className="column">
        <header>Wednesday</header>
        <ul>
          <li>first</li>
          <li>second</li>
        </ul>
        <footer>Add a commitment</footer>
      </div>

      <div className="column">
        <header>Thursday</header>
        <ul>
          <li>first</li>
          <li>second</li>
        </ul>
        <footer>Add a commitment</footer>
      </div>

      <div className="column">
        <header>Friday</header>
        <ul>
          <li>first</li>
          <li>second</li>
        </ul>
        <footer>Add a commitment</footer>
      </div>

      </div>
    </div>
  )
}
export default WeeklyCalendar