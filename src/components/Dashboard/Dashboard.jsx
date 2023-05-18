import React, {useState, useEffect, useContext} from 'react'
import Ticket from './../Tickets/Ticket';
import TicketContext from '../../Contexts/TicketContext';



const Dashboard = () => {

    const {tickets, fetchTickets} = useContext(TicketContext)

    useEffect(() => {
        fetchTickets()
    }, [])

  return (
    <div>
        <div>
            {tickets
                ? tickets.map((ticket)  => (
                    <div>
                        <Ticket ticket={ticket}/>
                    </div>
                ))  
            :null}

        </div>
    </div>
    
  )
}

export default Dashboard