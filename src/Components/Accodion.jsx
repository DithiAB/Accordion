import {useState, useEffect} from 'react'
import axios from "axios"
import './Accodion.css'
import Accodion2 from './Accodion2'

const Accodion = () => {
    const[data,setData]= useState([])
    const[isError, setIsError]= useState('')
    const[show, setShow]= useState(false)
    const getData=async()=>{
       try{
        const res= await axios.get("https://jsonplaceholder.typicode.com/posts")
        setData(res.data)
       }catch(error){
        setIsError(error.message)
       }
    }
   
    const display=accodionnumber=>{
       
        setShow(show===accodionnumber?false : accodionnumber)
    }
    useEffect(()=>{
        getData();
    },[])
  return (
    <>
    <div className='Accodion'>
        <h2><u>Frequently Asked Questions</u></h2>
        
        {data.slice(0,10).map((data,index)=>{

            return<Accodion2 index={index} data={data} show={show} setShow={setShow} display={display}  />
        })}
       </div> 
    </>
  )
}

export default Accodion