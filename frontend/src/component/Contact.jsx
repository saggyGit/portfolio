import React,{useState} from 'react';
import './Contact.scss';
import image from '../images/shake.svg';
import axios  from 'axios';

const Contact = () => {


    const[Name,setname]=useState("");
    const[Email,setemail]=useState("");

    const[Prof,setprof]=useState("");
    const[Feedback,setfeedback]=useState("");

    const submitHandler=(e)=>{

        e.preventDefault();

        const dataobj={

            Name,
            Email,
            Prof,
            Feedback
        }

        console.log(dataobj);

        axios.post("http://localhost:1000/user",dataobj);


        alert(" data added successfully");



        setname("");
        setemail("");
        setprof("");
        setfeedback("");


    }
    return (
        <div className='contact' id='contact'>
            
            <img src={image} alt="" />
            

    
                <form action="" onSubmit={submitHandler}>
                    <input type="text" placeholder='Enter name' onChange={(e)=>setname(e.target.value)} value={Name} />
                    <input type="email" placeholder='Enter Email' onChange={(e)=>setemail(e.target.value)} value={Email}/>
                    <input type="text" placeholder='what is your profession ' onChange={(e)=>setprof(e.target.value)} value={Prof}/>

                    <textarea onChange={(e)=>setfeedback(e.target.value)} value={Feedback}></textarea>
                    <button>submit</button>
                </form>
        
            
        </div>
    );
};

export default Contact;