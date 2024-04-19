import PropTypes from 'prop-types'

const Partner = ({partner}) => {
  return (
    <div className=''>
      {partner}
    </div>
  )
}

export default Partner


Partner.propTypes = {
  partner: PropTypes.string.isRequired,
}