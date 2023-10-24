import React from 'react'

function Product(props) {
  return (
    <div className="card me-3 mb-4 border-primary" style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{props.name}</h6>
    <p className="card-text">{props.desc}</p>
    <a href="#" className="card-link text-decoration-none">{props.about}</a>
   
  </div>
</div>
  )
}

export default Product