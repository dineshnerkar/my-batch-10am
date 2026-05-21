import {useState} from 'react'
import axios from 'axios'

function Postlistawait(){
    const [data,setData] = useState([])

    async function handleclick(){
        try{
            const response = await  axios.get("https://jsonplaceholder.typicode.com/posts")
               setData(response.data)
        }
        catch(err){
            console.log("error occur in getting posts::",err)
            setData([])
        }
        finally{
            console.log("Operation completed")
        }
    }

    return (
        <>
        <h1>Post List Axios Await</h1>
        <button onClick={handleclick}>Get Post</button>
        <ol>
            {data.map(function(ele,ind){
                return <li key={ind}>{ele.title}</li>
            })}
            </ol>
        </>
    )
}

export default Postlistawait;