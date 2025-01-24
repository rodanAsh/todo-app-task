import React, { useState } from 'react'
import Header from '../sections/Header'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoutes = ({cardType,setCardType}) => {
    const {isAuthenticated} = useSelector(state => state.auth)
  return (
    
        isAuthenticated ? (
            <>
                <Header cardType={cardType} setCardType={setCardType} />
                <Outlet cardType={cardType} />
            </>
        ) : <Navigate to={'/login'} />
    
  )
}

export default PrivateRoutes