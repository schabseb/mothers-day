import { FaHeart, FaArrowLeft } from 'react-icons/fa'

const Header = ({ title, onClick, color }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <FaHeart
        style={{ color: 'red', cursor: 'pointer', marginLeft: '15px' }}
        size={25}
        onClick={onClick}
      />
      <FaArrowLeft 
        style={{ color: color, marginLeft: '15px' }}
        size={25}
      />
      <p style={{ marginLeft: '10px', fontSize: '0.75em', fontFamily: 'Impact' }}>click here!</p>
    </header>
  )
}

export default Header