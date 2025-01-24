import { Stack } from '@mui/material'
import React from 'react'
import { ArrowDropDown } from '@mui/icons-material'
import TaskInput from './TaskInput'
import { useSelector } from 'react-redux'
import TaskList from './TaskList'

const Task = ({cardType}) => {
    const todos = useSelector(state => state.todo)
    console.log(todos);
    
  return (
    <section className='flex-1'>
        <div className='flex items-center text-green-500 font-semibold'>
            <p>To Do</p>
            <ArrowDropDown/>
        </div>

        <hr className='bg-[#49654B2e] h-0.5 border-none mt-2' />
        <TaskInput todos={todos} />
        <TaskList todos={todos} cardType={cardType} />
    </section>
  )
}

export default Task