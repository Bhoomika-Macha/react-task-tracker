import PropTypes from 'prop-types'
import '../App.css'
import Button from './Button'

const Header = ({title='Task Tracker'}) => {
  const onClick = ()=>{
    console.log('click')
  } 
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add' onClick={onClick}/>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

/* CSS in JS
const HeaderStyles = {
    color: 'red', 
    backgroundColor:'black'
}*/
export default Header
