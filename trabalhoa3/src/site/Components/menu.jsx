import React from 'react';
import { Link } from 'react-router-dom';


function Menu(){
    return  <nav className="navbar fixed-top navbar-expand-md navbar-dark">

    <div className="container">
            
        <Link className="navbar-brand" href="#">
          <img src="Images/logo.png" alt="" height="28" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="#banner">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="#features">IA's</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="#testemunho">Ferramentas de Teste</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="#preco">IDE's</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="#footer">Contato</Link>
            </li>
          </ul>
        </div>    
      
    </div>
  </nav>;
       
  }

  export default Menu;