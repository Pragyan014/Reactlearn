import React, { useState } from 'react'


const Crud = () => {

const [data,setdata]=useState();
useEffect(() => {
  axios.get('')
  .then((response) =>{
    setdata(response.data);
console.log(response.data);
})
}, [])

  return (
    <>
    {data.map((user) =>{
        return(
            <ul key={user.id}>
        <li>{user.id}</li>
        <li>{user.name}</li>
        <li>{user.email}</li>
    </ul>
        )}

    
    
    )}
    
    <button>edit</button>
    <button>delete</button>

    
    </>
  )
}

export default Crud