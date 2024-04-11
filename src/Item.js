import {useLocation} from 'react-router-dom'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';
function Item(){
    const location=useLocation();
    const [data1,setData]=useState({})
    const data=location.state
    useEffect(()=>{
        
            fetch("https://fakestoreapi.com/products/"+data.pid).then((result)=>{
                console.log(result)
                  result.json().then((apidata)=>{
                    setData(apidata)
                  })
            })

           
    },[])

   
    return(
    <div>
        <br></br>
       <MDBCard>
      <MDBCardImage src={data1.image} position='top' alt='...' style={{width:"300px",height:"300px"}}/>
      <MDBCardBody>
        <MDBCardTitle>{data1.title}</MDBCardTitle>
        <MDBCardTitle style={{color:"red"}}>{data1.price*80} Rs</MDBCardTitle>
        <MDBCardText>
         {data1.description}
        </MDBCardText>
        <MDBBtn href='#'>By Now</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </div>
    )
}
export default Item