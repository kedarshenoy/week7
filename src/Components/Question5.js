import axios from 'axios'
import { useEffect, useState } from 'react';
import Question5prof from "./Question5prof";
import Nav from './navigate';

const Question5 =()=>{
    const [user,setuser]= useState([]);
    useEffect(()=>{
        axios.get(" https://api.github.com/users/kedarshenoy").then(result=>{
        setuser(result.data);
        }).catch(error=>{
            console.log(error);
        })
    },[])

    
return(
            <Question5prof user={user}/>
)

}
export default Question5;