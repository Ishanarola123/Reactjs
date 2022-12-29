import React from 'react'
import Table from './Table'

export default function Fragments() {
  return (
    // <div>
    //    <h1>Hello ,this is Fragment Demo of React</h1>
    //    <p>THis is fragment demo of react js its second element of the react js </p>
    // </div>
    <>
        <h1>Hello ,this is Fragment Demo of React</h1>
        <p>THis is fragment demo of react js its second element of the react js </p>
        <Table/>
    </>
  )
}
