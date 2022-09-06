import axios from 'axios';
import React,{useEffect,useState} from 'react';
import './Testimonials.scss';


const Testimonials = () => {


    const[data,setuserData]=useState([]);


  useEffect(()=>{
    axios.get("http://localhost:1000/user")
    .then(async(res)=>{
      
      const rawData=await res.data;
      console.log(rawData);
      setuserData(rawData);
    })
    .catch((err)=> console.log(err));

  },[]);


  console.log(data);

    return (
            <div className='testimonials' id='testi'>
              <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    
    {data.length >= 3 &&<div class="carousel-item active"> <div className="row">
        {
          data.slice(0,3).map(row=>{
            return(
              <>
              <div className="col-md-3 small ">
          <span className="img-text">
            <h1>{row.Name} </h1>
            <h2>{row.Prof}</h2>
            <h3>{row.Feedback}</h3>
          </span>
        </div>
              </>
            )
          })
        }
    </div>
      </div>}
      
    
      {data.length >=4 && <div class="carousel-item"> <div className="row">

{
      data.slice(3,6).map(row=>{
        return(
          <>
          <div className="col-md-3 small ">
      <span className="img-text">
            <h1>{row.Name} </h1>
            <h2>{row.Prof}</h2>
            <h3>{row.Feedback}</h3>
      </span>
    </div>

          </>
        )
      })
    }
    
  </div>
  </div>
  }
    
      {data.length >= 7 &&  <div class="carousel-item">
    <div className="row">
    {
          data.slice(6,9).map(row=>{
            return(
              <>
              <div className="col-md-3 small ">
          <span className="img-text">
            <h1>{row.Name} </h1>
            <h2>{row.Prof}</h2>
            <h3>{row.Feedback}</h3>
          </span>
        </div>
              </>
            )
          })
        }
      </div>
    </div>}
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon positionl" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon positionr" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
 
    </div>
            
        
    );
};

export default Testimonials;