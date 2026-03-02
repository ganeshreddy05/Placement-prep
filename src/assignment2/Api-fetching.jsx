import { useEffect, useState } from "react";

function UserList(){
const [users,setUsers]=useState([]);
const [loading,setLoading]=useState(true);
const [error,setError]=useState("");

useEffect(()=>{;
    const fetchUsers=async()=>{
        try{
            const res=await fetch(
                 "https://jsonplaceholder.typicode.com/users"
            );
            if(!res.ok){
                throw new Error("Failed to fetch users");
            }
            const data=await res.json();
            setUsers(data);
        }catch(err){
            setError(err.message);
        }finally{
            setLoading(false);
        }
    }
    fetchUsers();
    },[]);

    
    if(loading)
        return <p>Loading</p>;
    if(error)
        return <p>Error:{error}</p>

    return(
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user=>(
                <li key={user.id}>{user.name}</li>
            ))}
            </ul>
        </div>

    )}
    export default UserList;