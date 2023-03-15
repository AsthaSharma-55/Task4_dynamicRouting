import React,{useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from "../store/actions/useraction";
import { useParams } from "react-router-dom";
// import { emptyUser } from "../store/reducers/usersReducer";

const Users = () => {
    // const [data,setData]=useState()
    const dispatch = useDispatch();
    const params=useParams();
    const{id}=params;
    console.log("params",params)
    console.log(id)
    const { users } = useSelector((state) => state.users)
    console.log("userdata",users)         //destructuring
      
    useEffect(() => {
        dispatch(getUsers())
    }, [])

    
     
    return (
        <div>
            {/* {data.params.users[id].name} */}
        
            <h3>Id : {users[id]?.id}</h3> 
            <h3>Name : {users[id]?.name}</h3> 
            <h3>Email: {users[id]?.email}</h3> 
            <h3>body: {users[id]?.body}</h3> 
            <h3>Company: {users[id]?.company}</h3> 
           
        </div>
    )
}
export default Users;