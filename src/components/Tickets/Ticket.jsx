import React from 'react'
import "./Ticket.css"
import avatar from "./avatar.png"

const Ticket = ({ticket, user}) => {

    


  return (
    <div className='ticket-main-container'>
            <div className='ticket-info'>
                <div className='ticket-info-two'>
                    <div className='ticket-number'>
                        TICKET#{ticket.Incident_ID}
                    </div>  
                    <div className='time-posted'>
                        Posted at {ticket.Open_Time}
                    </div>
                </div>
                <div className='ticket-title'> 
                    {ticket.CI_Subcat}
                </div> 
            </div>
            <div className='ticket-body'>
                Lorem ipsum dolor sit amet. Ut culpa dolores eum corrupti galisum est iusto doloremque eos quia eius aut iure magni. Sed Quis delectus non beatae voluptatibus cum facere mollitia hic aliquid minima et laboriosam sint sed quaerat cupiditate sed voluptas aspernatur? Id architecto iste ad nihil odio eum odit quia a 
            </div>
            <div className='user-container'>
                    <img className='profile-pic' src={avatar} alt="" />
                <div className='ticket-creator'>
                    {user.email}
                </div>
            </div>

    </div>
  )
}

export default Ticket