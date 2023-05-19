import React from 'react'
import "./Ticket.css"

const Ticket = ({ticket, user}) => {
  return (
    <div>

        <div className='ticket-main-container'>
            <div className='ticket-info'>
                <div className='ticket-number'>
                    TICKET#{ticket.Incident_ID}
                </div>  
                <div className='ticket-title'> 
                    HOW TO DEPOSIT MONEY
                </div> 
                <div className='ticket-body'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </div>
            <div className='ticket-creator'>
                User 1
            </div>
        </div>

    </div>
  )
}

export default Ticket