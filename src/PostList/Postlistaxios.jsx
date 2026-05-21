import {useState} from 'react'
import axios from 'axios'

function Postlistaxios(){
    const [data,setData] = useState([])

    function handleclick(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(function(response){
            setData(response.data)
        })
      
        .catch(function(){
            setData([])
        })
        .finally(function(){
            console.log("task completed")
        })
    }

    return (
        <>
        <h1>Post List Axios</h1>
        <button onClick={handleclick}>Get Post</button>
        <ol>
            {data.map(function(ele,ind){
                return <li key={ind}>{ele.title}</li>
            })}
            </ol>
        </>
    )
}

export default Postlistaxios;