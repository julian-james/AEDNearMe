import React from 'react'
import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to='/cpr'>CPR</Link>
                </li>
                <li>
                <Link to="/quiz">Quiz</Link>
                </li>
                <li>
                <Link to="/upload">New AED?</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
