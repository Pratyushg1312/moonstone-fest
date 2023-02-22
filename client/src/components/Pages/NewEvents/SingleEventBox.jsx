import React from 'react'

export default function SingleEventBox() {
  return (
    <a className="card" href="#">
    <div
      className="card__background"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)"
      }}
    />
    <div className="card__content">
      <p className="card__category">Category</p>
      <h3 className="card__heading">Example Card Heading</h3>
      <div className="event-buttons">
      <button>View Details</button>
      <button>Register</button>
      </div>
    </div>
  </a>

  )
}
