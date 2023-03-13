import React, { useState, useEffect, useCallback } from 'react'

interface User {
    id: number,
    username:string,
}

const Counter2 = () => {
    const [count, setCount ] = useState<number>(0)
    const [user, setUser ] = useState<User[] | null>(null)



    useEffect(() => {
      console.log('mounting user')
      console.log('user:', user)
    
      return () => console.log('Unmounting')
    }, [])
    
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=> setCount(prev => prev  + 1)}>Add</button>
    </div>
  )
}

export default Counter2