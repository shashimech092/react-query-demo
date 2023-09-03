import React from 'react'
// import {useQuery} from 'react-query'
// import { useParams } from 'react-router-dom'
import { useSuperHerosData } from '../Hooks/useSuperHeroData'
// import axios from 'axios'

// const fetchSuperHeros=()=>{
//   return axios.get('http://localhost:4000/superheros')
// }

export function RQSuperHerosPage() {
  const onSuccess=(data)=>{
    console.log('perform side effect after data fetching', data)
  }
  const onError=(error)=>{
    console.log('perform side effect after encountering error', error)
  }

    // const {isLoading, data, isError, error, refetch, isFetching} =  useQuery('super-heros', 
    // fetchSuperHeros,
    // {
    //   // enabled: false
    //   onSuccess,
    //   onError,
    //   select: (data)=>{
    //   const superHeroNames=data.data.map((hero)=>hero.name)
    //     return superHeroNames
    // }})
    const {isLoading, data, isError, error, refetch, isFetching} = useSuperHerosData(onSuccess, onError)

    console.log({
      isLoading,
      isFetching
    })

    if(isLoading || isFetching) {
      return <h2>Loading...</h2>
    }

    if(isError){
      return <h2>{error.message}</h2>
    }

    return (
      <>
      <h2>RQ Super Heros Page</h2>
      <button onClick={refetch}>fetchSuperHeros</button>
      {/* {data?.data.map((hero)=>{
        return <div key={hero.name}>{hero.name}</div>
      })} */}
      {/* {
        data.map((heroName)=>{ 
          return <div key={heroName}>{heroName}</div>
        })
      } */}
      return <div>{data?.data.name}-{data?.data.class}</div>
      </>
    ) 
}
