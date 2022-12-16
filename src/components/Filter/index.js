import React, { useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { uzeReplace } from '../../hooks/useReplace'
import './style.css'
const Filter = ({ isNavbar }) => {
  // const [data, setData] = useState([])
  const titleRef = useRef()
  const location = useLocation()
  const navigate = useNavigate()

  const handleChange = ({ target: { name, value } }) => {
    navigate(`${location?.pathname}${uzeReplace(name, value)}`)
  }

  return (
    <div className='search-logo'>
      <i className='bx bx-search-alt-2'></i>
      <input
        placeholder='Search'
        className={isNavbar ? 'search-active search' : ' search'}
        ref={titleRef}
        name='title'
        onChange={handleChange}
      />
    </div>
  )
}

export default Filter
