import React from 'react'

export default function navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg  ">
      <div class="logo-image me-2">
            <img src="hrxlogo.jpg" class="img-fluid" className='logo' />
      </div>
        <a class="navbar-brand" href="#"><span style={{fontFamily:'castellar',fontSize:30}}><i style={{color:'mediumaquamarine'}}>HRITIK ROSHAN</i></span></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/"><span className='navitem'>Home</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/findmovies"><span className='navitem'>Explore HR Movies</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://hrxbrand.com/home" target='_blank'><span className='navitem'>Visit HRXbrand</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/about"><span className='navitem'>About</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/contact"><span className='navitem'>Contact & Follow</span></a>
            </li>
          </ul>

        </div>
      </nav>

    </div>
  )
}
