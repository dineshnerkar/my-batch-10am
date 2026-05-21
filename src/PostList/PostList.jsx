import { useState } from "react";

function Post(){
     let obj= new XMLHttpRequest();
    const [data,setData] = useState([])

    function fnsuccess(){
        let result = obj.responseText
        setData(JSON.parse(result))
    };

    function fnerror(){
        setData([])
    }

    function handleclick(){
        obj.open("Get","https://jsonplaceholder.typicode.com/posts");
        obj.send();
        obj.onload=fnsuccess;
        obj.onerror=fnerror;
    }

    return(
        <>
        <button onClick={handleclick}>Get Posts</button>
        <h1>Post List</h1>
        <ol>
            {data.map(function(ele,ind){
                return <li key={ind}>{ele.title}</li>
            })}
        </ol>
        </>
    )
}

export default Post;