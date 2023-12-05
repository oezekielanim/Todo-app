import propTypes from 'prop-types'

const Button = ({ color, text }) => {
  return (
    <button className="bg-black text-white px-3 rounded" style={{ backgroundColor: color}}>
      {text}
    </button>
  )
}

Button.defaultProps  = {
    color: 'steelblue',
}

Button.propTypes = {
    text: propTypes.string,
    color: propTypes.string,
}
export default Button
