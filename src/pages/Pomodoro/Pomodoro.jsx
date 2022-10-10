import React from 'react'
import { PomodoroDescription } from '../../components/PomodoroDescription/PomodoroDescription'
import { PomodoroTimer } from '../../components/PomodoroTimer/PomodoroTimer'

export const Pomodoro = () => {
  return (
    <div>
      <PomodoroTimer/>
      <PomodoroDescription />
    </div>
  )
}
