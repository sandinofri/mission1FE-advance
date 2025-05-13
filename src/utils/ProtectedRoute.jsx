import React, { use } from 'react'
import { useNavigate } from 'react-router-dom'


const navigate = useNavigate()
const ProtectedRoute = ({children}) => {
    // const token = 1234 
    if(!token){
        return navigate('/login')
    }else{
        return children
    }
}

export default ProtectedRoute