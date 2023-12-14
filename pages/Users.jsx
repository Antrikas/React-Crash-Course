import {Link, useParams} from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import axios from 'axios'

function Users () {
    const { id } = useParams ()
 const [user, setUser] = useState({})
  
async function fetchUsers () {
  const {data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
setUser(data)

}

useEffect (() =>{
    fetchUsers()
}, [])
    return (
    <div>
        <Link to="/">Go Back</Link>
        <p>{user.id}</p>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.username}</p>
    </div>
    )
}

export default Users