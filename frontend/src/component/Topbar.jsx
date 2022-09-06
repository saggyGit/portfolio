import React from 'react';
import './Topbar.scss';

const Topbar = () => {
    return (
        <>
        <div className="topbar">
    
        <nav class="navbar bg-light fixed-top">
  <div class="container-fluid bg-secondary height">
    <a class="navbar-brand" href="#">SAGAR.LMT</a>
    <a class="navbar-brand" href="#">+917620678686</a>
    <a class="navbar-brand" href="#">lobhesagar14@gmail.com</a>
    <a class="navbar-brand" href="#"></a>
    <a class="navbar-brand" href="#"></a>
    <a class="navbar-brand" href="#"></a>
    <a class="navbar-brand" href="#"></a>
    <a class="navbar-brand" href="#"></a>





    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body ">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          
          <li class="nav-item mt-3">
            <a class="nav-link active" aria-current="page" href="#intro">Intro</a>
          </li>
          <li class="nav-item mt-3">
            <a class="nav-link active" aria-current="page" href="#portfolio">portfolio</a>
          </li>
          <li class="nav-item mt-3">
            <a class="nav-link active" aria-current="page" href="#works">works</a>
          </li>
          <li class="nav-item mt-3">
            <a class="nav-link active" aria-current="page" href="#testi">Testimoneals</a>
          </li>
          <li class="nav-item mt-3">
            <a class="nav-link active" aria-current="page" href="#contact">contacts</a>
          </li>
         
         
         
         
         
         
              
        </ul>
        
      </div>
    </div>
  </div>
</nav>
        </div>
            
</>
    );
};

export default Topbar;