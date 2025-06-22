import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AuthWrapper = (props) => {
    const user = useSelector((state) => state.user.user)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        // Check localStorage first
        const localUser = localStorage.getItem('user')
        if (localUser || user) {
            setIsAuthenticated(true)
        }
        setLoading(false)
    }, [user])
    
    if (loading) {
        return <div>Loading...</div>
    }
    
    return isAuthenticated ? props.children : <Navigate to="/login" />
}

export default AuthWrapper
