import { createContext, useState, useEffect } from "react";
import api from "../services/api";


const TicketContext = createContext()

export default TicketContext

export const TicketContextProvider = ({children}) => {

    const [tickets, setTicket] = useState("")
    

    const fetchTickets = () => {
        api
            .get("/ticket")
            .then((response) => {
                setTicket(response.data)
                console.log(setTicket)

            })
            .catch((err) => {
                console.error(err);
            }); 
    }


    useEffect(() => {
        fetchTickets()
    }, [])


    return (
        <TicketContext.Provider value = {{tickets, fetchTickets}}>
            {children}
        </TicketContext.Provider>
    )
}