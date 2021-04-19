import {useState} from 'react'
import {useCookies} from 'react-cookie'
import {useHistory} from 'react-router-dom'


export const Login = (props) =>{
    const [email,setEmail]=useState('')
    const[password,setPassword] =useState('')
    const history=useHistory()
    
const [cookies,setCookies,removeCookies]=useCookies(['THEtoken'])


const handleChange= (e) =>
{
   
    if (e.target.name==='email'){
        setEmail(e.target.value)
       
    }
    if (e.target.name==='password')
    {
        setPassword(e.target.value)
    }
 

}
const handleLogin = (e)=> {
    e.preventDefault()
   
   const data={'username':email,'password':password}
 
    fetch('http://localhost:8000/accounts/token', {
        method: 'POST',
        headers: {
            
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${cookies.token}`
        },
        body: JSON.stringify(data)
      })
    .then(res=>res.json())
    .then(json=> {
 
       setCookies('token',json.access,{path:'/'})
       setCookies('refresh',json.refresh,{path:'/'})
       if (cookies){history.push('/');window.location.reload();console.log(json)}
    })
 
    .catch( err=>console.log('something went wrong please try later'))
    
 
}


    return (
  
 
        <form onSubmit={e => handleLogin(e)} >
     
        <div className="gridStyle">       
      
         <div className="inputGroupe">
            
            <input 
            className="select email"
            type='text'
             name='email'
             placeholder="email"
             value={email}
             onChange={handleChange}
            
             /> 
 
       
           <input 
           className="select password"
           type='text'
           name='password'
           placeholder="password"
           value={password}
           onChange={handleChange}
           />
      
           </div>
           <input   className="select sendButton" type="submit" onclick={()=> props.admincheck}/> 
           </div>  
          
          
          
           
        </form>
       
    )
}
