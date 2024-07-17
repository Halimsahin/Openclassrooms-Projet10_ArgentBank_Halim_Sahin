import '../css/main.css'
import PropTypes from 'prop-types'

export default function FeatureItem({ iconUrl, title, text }) {
  return (
    <div className="feature-item">
      <img src={iconUrl} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  )
}

FeatureItem.propTypes = {
  iconUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}