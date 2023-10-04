
import './Accodion.css'

const Accodion2 = ({data,index,show, setShow, display}) => {
   
  return (
    <div className='main'>
        <div className='qstn'>
            <h3>{data.title} </h3>
            <p onClick={()=>display(index)} >{show===index? <i class="fa-solid fa-angle-up"></i>:<i class="fa-solid fa-chevron-down"></i>}</p>
        </div>
        <div className='answr'>
         <p style={show===index?accodionopen:accodionclose}>{data.body}</p>
         </div>
       
    </div>
  )
}

export default Accodion2;

const accodionopen={
    margin:"3px auto",
    height:"100%",
}
const accodionclose={
margin:"3px auto",
height:"0px",
overflow:"hidden"
}