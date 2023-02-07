import React from 'react'
import "./Nav.scss"

const Nav = () => {
  return (
    <nav className = "nav">
        <label for ="nav__search">Search:</label>
        <input type="text" className="nav__search"></input>
        <label for="job-type">Job type:</label>
        <select name="job-type" className="job-type">
            <option value="tester">Tester</option>
            <option value="project-manager">Project Manager</option>
            <option value="hard-man">Hard Man</option>
            <option value="senior-dev">Senior Software Developer</option>
            <option value="dev">Software Developer</option>
            <option value="junior-dev">Junior Software Developer</option>
        </select>
    </nav>
  )
}

export default Nav