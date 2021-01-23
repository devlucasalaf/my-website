import React from 'react'

const ValorantBtn = (props) => {
    return (
        <div>
            <div id='btn-submit-wrapper'>
                <button type='submit' onClick={props.save}>{props.name}<span id='btn-square'></span></button>
                <div id='btn-shade'>
                    <span id='shade'></span>
                </div> 
            </div>  
        </div>
    )
}
export default ValorantBtn