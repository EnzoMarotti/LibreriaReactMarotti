import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const footer = () => {
  return (
    <div className='footer'>
        <div className='footerInfo'>
            <div className='info'>
            <FontAwesomeIcon  className='icons' icon={faPhone} />
            <p>+59 0 2231 2213</p>
            </div>
            <div className='info'>
            <FontAwesomeIcon className='icons' icon={faEnvelope} />
            <p>tragoamargo@example.com</p>
            </div>
            <div className='info'>
            <FontAwesomeIcon className='icons' icon={faLocationDot}/>
            <p>General Pico-La Pampa</p>
            </div>
        </div>
        <div className='brand'>
            <h2>Trago Amargo</h2>
            <h4>La cerveza mas refrescante</h4>
        </div>
    </div>
  )
}

export default footer