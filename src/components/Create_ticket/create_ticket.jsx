import React from 'react';
import './create_ticket.css';

const CreateTicket = () => {
  return (
    <div className="create-ticket-container">
      <h1 className="ticket-heading">New Ticket</h1>
      <div className="ticket-description">
        <h2>Create Quick Ticket</h2>
        <p>Write and address new queries and issues</p>
      </div>
      <div className="create-ticket-form-container">
        <form>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" className="input-field" placeholder="Type email" />
            </div>
            <div className="form-group">
              <label htmlFor="request-type">Request Ticket Type:</label>
              <select id="request-type" className="input-field">
                <option value="">Choose type</option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
                <option value="type3">Type 3</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="priority">Priority:</label>
              <select id="priority" className="input-field">
                <option value="">Choose priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="ticket-body">Ticket Body:</label>
            <textarea id="ticket-body" className="input-field textarea-field" placeholder="Write your ticket here"></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="submit-button">Send Ticket</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTicket;
