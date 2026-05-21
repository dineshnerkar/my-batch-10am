import {useState} from 'react'

function Postlistfetch(){
    const [data,setData] = useState([])

    function handleclick(){
        fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"Get"
        })
        .then(function(responsedata){
            return responsedata.json()
        })
        .then(function(result){
            console.log("result::",result)
            setData(result)
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
        <h1>Post List Fetch</h1>
        <button onClick={handleclick}>Get Post</button>
        <ol>
            {data.map(function(ele,ind){
                return <li key={ind}>{ele.title}</li>
            })}
            </ol>
        </>
    )
}

export default Postlistfetch;