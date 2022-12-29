import React from 'react'

const UserList = () => {
    const names=['isha','neha','priya']
    // const NameList=names.map(name => <h2>{name}</h2>)
    const NameList= names.map(name => <h2>{name}</h2>)
  return (
    <div>
    {NameList}
    </div>
  )
}

export default UserList
