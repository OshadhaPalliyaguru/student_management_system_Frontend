import React from 'react'

function NavBAr() {
  return (
    <>
  <nav className="navbar navbar-expand-lg bg-dark shadow-sm" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand fw-bold" href="#">SMS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Register </a>
        <a className="nav-link" href="#">Update</a>
        <a className="nav-link" href="#">Eliminate</a>
        <a className="nav-link" href="#">Search</a>
        
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBAr