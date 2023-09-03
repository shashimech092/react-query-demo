import React, { useState, useEffect } from 'react'
import axios from 'axios'

export function SuperHerosPage() {
  const [data, setData]=useState([])
  const [isLoading, setIsLoading]=useState(true)
  const [error, setError]=useState('')

  useEffect(()=>{
    axios.get('http://localhost:4000/superheros')
    .then((res)=>{
      setData(res.data)
      setIsLoading(false)
    })
    .catch((error)=>{
      setError(error.message)
      setIsLoading(false)
    })
  }, [])

  if(isLoading){
    return <h2>Loading...</h2>
  }

  if(error){
    return <h2>{error}</h2>
  }

  return (
    <div>
      {data.map((hero)=>(
        <h2 key={hero.name}>{hero.name}</h2>
      ))}
    </div>
  )
}
