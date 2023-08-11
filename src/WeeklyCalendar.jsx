import React from 'react'
import { useState } from 'react'
import AppBar from './CalendarComponents/AppBar/AppBar'
import BoardBar from './CalendarComponents/BoardBar/BoardBar'
import BoardContent from './CalendarComponents/BoardContent/BoardContent'
import './App.scss'

function WeeklyCalendar() {
  
  return(
    <div className="trello-master">
      <AppBar />
      <BoardBar />
      <BoardContent />
    </div>
  )
}
export default WeeklyCalendar