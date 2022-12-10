import React, { useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { uzeReplace } from '../../hooks/useReplace'
import './style.css'
const Filter = () => {
  // const [data, setData] = useState([])
  const titleRef = useRef()
  const location = useLocation()
  const navigate = useNavigate()

  const handleChange = ({ target: { name, value } }) => {
    navigate(`${location?.pathname}${uzeReplace(name, value)}`)
  }

  return (
    <div className='search-logo'>
      <i class='bx bx-search-alt-2'></i>
      <input
        placeholder='Search'
        className='search'
        ref={titleRef}
        name='title'
        onChange={handleChange}
      />
    </div>
  )
}

export default Filter
