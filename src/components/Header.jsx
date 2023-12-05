import propTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  return (
    <header className='flex justify-between'>
      <h1 className='font-bold text-2xl'>{title}</h1>
      <Button color='green' text = 'Add'  />
    </header>
  )
}
Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: propTypes.string.isRequired,
}
export default Header


