import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return (
        <body>

        <ul class="topnav">
          <li><a class="active" href="#accueil">Accueil</a></li>
          <li><NavLink to="/b">Julie Billiart</NavLink></li>
          <li><NavLink to="/eleve">Eleves</NavLink></li>
          <li class="right"><a href="#apropos">A propos</a></li>
        </ul>
        
       
        
        </body>
    )
}
