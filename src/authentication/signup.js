import {useState} from 'react'
import {useCookies,withCookies} from 'react-cookie'
export const Signup = (props) =>{
    const [username,setUsername]=useState('')
    const[password,setPassword] =useState('')
    const[email,setEmail] =useState('')
    const [cookies,setCookies,removeCookies]=useCookies(['THEtoken'])

const handleChange= (e) =>
{
   
    if (e.target.name==='username'){
        setUsername(e.target.value)
       
    }
    if (e.target.name==='password')
    {
        setPassword(e.target.value)
    }
    if (e.target.name==='email')
    {
        setEmail(e.target.value)
    }
 

}
const handleSignup= (e)=> {
    e.preventDefault()
    const data={'username':username,'email':email,'password':password}
    fetch('http://localhost:8000/accounts/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    .then(res=>{res.json()})
    .then(json=> {
        console.log(json)
        setCookies('token',json.access,{path:'/'})
        setCookies('refresh',json.refresh,{path:'/'})
 
       

    })

  
}


    return (
        <form >
         <div className="gridStyle">
         
           <div className="inputGroupe">
           <input 
           className="select"
           type='text'
           name='username'
           value={username}
           placeholder="username"
           onChange={handleChange}
           />         
           <input 
            className="select"
           type='text'
           name='email'
           value={email}
           onChange={handleChange}
           placeholder="email"
           />
            <input
            className="select" 
           type='text'
           name='password'
           value={password}
           onChange={handleChange}
           placeholder="password"
           />
           </div>
        <input  className="select sendButton"  type="submit" onClick={e =>handleSignup(e)}/>   
        </div>   
        </form>
    )
}