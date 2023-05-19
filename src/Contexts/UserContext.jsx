import { createContext, useState, useEffect } from "react";
import api from "../services/api";


const UserContext = createContext()

export default UserContext

export const UserContextProvider = ({children}) => {

    const [users, setUser] = useState("")
    

    const fetchUsers = () => {
        api
            .get("/users")
            .then((response) => {
                setUser(response.data)
                console.log(setUser)

            })
            .catch((err) => {
                console.error(err);
            }); 
    }


    useEffect(() => {
        fetchUsers()
    }, [])


    return (
        <UserContext.Provider value = {{users, fetchUsers}}>
            {children}
        </UserContext.Provider>
    )
}