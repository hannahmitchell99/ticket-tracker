import { setSelectionRange } from '@testing-library/user-event/dist/utils'
import React from 'react'

import "./Nav.scss"

const Nav = (props) => {

  const {handleInput, handleSelect} = props;

  return (
    <nav className = "nav">
        <label for ="nav__search">Search:</label>
        <input onChange={handleInput} type="text" className="nav__search"></input>
        <label for="job-type">Job type:</label>
        <select onClick={handleSelect}name="job-type" className="job-type">
            <option value="Tester">Tester</option>
            <option value="Project Manager">Project Manager</option>
            <option value="Hard Man">Hard Man</option>
            <option value="Senior Software Developer">Senior Software Developer</option>
            <option value="Software Developer">Software Developer</option>
            <option value="Junior Software Developer">Junior Software Developer</option>
        </select>
    </nav>
  )
}

export default Nav