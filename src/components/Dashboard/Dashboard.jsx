import React, {useState, useEffect, useContext} from 'react'
import Ticket from './../Tickets/Ticket';
import TicketContext from '../../Contexts/TicketContext';
import UserContext from '../../Contexts/UserContext';



const Dashboard = () => {

    const {tickets, fetchTickets} = useContext(TicketContext)
    const {users, fetchUsers} = useContext(UserContext)

    useEffect(() => {
        fetchTickets()
        fetchUsers()
    }, [])

  return (
    <div>
        <div>
            {tickets && users
                ? tickets.filter((ticket, index) => index <3).map((ticket, index)  => (
                    users.filter((user, idx) => idx === index).map(user => 
                    <div>
                        <Ticket ticket={ticket} user={user}/>
                    </div> )
                    
                ))  
            :null}

        </div>
    </div>
    
  )
}

export default Dashboard