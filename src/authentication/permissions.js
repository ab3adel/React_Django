import axios from "axios"
import { useEffect, useState } from "react"

export const UsersList=()=>{
    const[Users,setUsers]=useState()
    useEffect( ()=>{
        axios.get('http://loaclhost:8000/accounts/UsersLists/')
        .then (res=>setUsers(res.data))
    },[])
console.log(users)

    return(
        <div>
        <table className="tableItems">
            <thead>
                <tr>
                    <th>name</th>
                    <th>description</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
               
                     

            </tbody>
        </table>
    </div>
    )
}