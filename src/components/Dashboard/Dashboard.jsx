import React, {useState, useEffect, useContext} from 'react'
import Ticket from './../Tickets/Ticket';
import TicketContext from '../../Contexts/TicketContext';
import UserContext from '../../Contexts/UserContext';
import "./Dashboard.css"
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../navbar/navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';




const Dashboard = () => {

    const {tickets, fetchTickets} = useContext(TicketContext)
    const {users, fetchUsers} = useContext(UserContext)

    useEffect(() => {
        fetchTickets()
        fetchUsers()
    }, [])

  return (
      <div>
        <Sidebar />
        <Navbar />
          

        <div className='ticket-page'>Tickets</div>
        <div className='new-ticket'>
            <Link to="/new_ticket">
            <button className='new-ticket-btn'> New Ticket</button>

            </Link>
        </div>
        <div>
            {tickets && users
                ? tickets.filter((ticket, index) => index <3).map((ticket, index)  => (
                    users.filter((user, idx) => idx === index).map(user => 
                    <div>
                        <Ticket ticket={ticket} user={user}/>
                    </div> )
                    
                ))  
            :null}
        <Footer />
        </div>
    </div>
    
  )
}

export default Dashboard