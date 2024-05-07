import React, { useState } from 'react'

export const More = () => {
  const [data, setData] = useState()
  return (
    <div>
      <div>{data ? <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="" style={{ width: "200px", height: "250px" }}></img> : "Loading" }</div>
      <h2 >{data ? data.title: "Loading" }</h2>
      <p >Release Date: {data ? data.release_date : "Loadng"}</p>
      <button className='bg-red-900 px-4 py-2 text-white'>Update</button>
      <button className='bg-yellow-600 px-4 py-2 text-white' >Delete</button>
    </div>
  )
}
