import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function PopUp({closePopup}) {
    function removePopup(event){
        event.preventDefault()
        closePopup()
    }

  return (
    <div id='popup'>
        <FontAwesomeIcon onClick={(event) => removePopup(event)} className='popup--mark' icon='fa fa-xmark'/>
        <FontAwesomeIcon className='popup--icon' icon='fa fa-gift' />
        <div className="popup--content">
        <h4 className="popup__header">1 week of <span className="purple">Free</span> signals !!</h4>
            <form action="">
                <input id='popup__input' placeholder='enter your email' type="email" />
                <input onClick={(event) => removePopup(event)} type='submit' />
            </form>
        </div>
    </div>
  )
}

export default PopUp