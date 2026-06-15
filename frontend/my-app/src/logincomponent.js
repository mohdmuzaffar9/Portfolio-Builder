import  { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import './ComponentsStyles/index.css'

const LoginComponent = ()=>{
    const Navigate = useNavigate()

    const[isRegistered, setIsRegistered] = useState(true)
    const [name,setName] = useState()
    const [password,setPassword] = useState()


    const onRegistered = ()=>{
        setIsRegistered(false)
    }

    const onSignIn = ()=>{
        setIsRegistered(true)
    }


    const onRegisterDetails =async ()=>{
        event.preventDefault()
        const data = {
            username: name,
            password: password,
            confirmPassword: password,
        }
        console.log(data)
        alert("Registration successful")
        setIsRegistered(true)
        setName("")
        setPassword("")

    }
    const onSubmitDetails =async ()=>{
        event.preventDefault()

       const data = {
            username: name,
            password: password,
        }
        console.log(data)

        if(data.username === undefined || data.password === undefined){
            alert("Please fill in all fields")
            
        }else{
           Navigate("/dashbord") 
        }
        // Uncomment the following lines to send a POST request to your backend API
        // Make sure to replace the URL with your actual backend endpoint
        

    //    await axios.post('http://localhost:5000/api/login', data)
    //         .then(response => {
    //             console.log(response.data);
    //             // Handle successful login here (e.g., redirect to dashboard)
    //         })
    //         .catch(error => {
    //             console.error('There was an error logging in!', error);
    //         });

    }

    return(
        <div>
        {isRegistered &&
        <>

         {/* login form */}
        <form className = "form-container" onSubmit={onSubmitDetails}>
            <h1>Login to your account</h1>
            <input type = "text" placeholder='EnterUsername'value = {name} onChange={(e)=>setName(e.target.value)}/>
            <br/>
            <input type = "password" placeholder='EnterPassword' value = {password} onChange = {(e)=>setPassword(e.target.value)}/>
            <br/>

            <button type = "submit">Submit</button>

        </form>
        <div class="signin-link">
          <p>
              Don't have an account   <span>
                    <button onClick = {onRegistered}>signup</button>
                    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;500&display=swap" rel="stylesheet">
                    </link>
              </span>
          </p>
        </div>
        </>
}
{/* Registration Form */}
        {
            !isRegistered&&
            <>
            <form className = "form-container" onSubmit={onRegisterDetails}>
            <h1>Register</h1>
            <input  className = "input-tags" type = "text" placeholder='EnterUsername' value = {name} onChange={(e)=>setName(e.target.value)}/>  
            <br/>
            <input type = "password" placeholder='EnterPassword' value = {password} onChange = {(e)=>setPassword(e.target.value)}/>
            
            <br/>
            <input type = "password" placeholder='ConfirmPassword' value = {password} onChange = {(e)=>setPassword(e.target.value)}/>
            <br/>
            <button type  = "submit">
                Register
            </button>



            </form>   
            <div class="signin-link">
            <p>
                if already Existing User   <span>
                    <button onClick = {onSignIn} >Sign in </button>
                    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;500&display=swap" rel="stylesheet">
                    </link>

                </span>
            </p>
            </div>
          </> 
        }
        </div>
    )
}

             


export default (LoginComponent)