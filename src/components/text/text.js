import React from 'react' 
import './text.css'

const Text = ({font, fontUppercase}) => {
    return(
        <div>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ratione fugit mollitia dicta, praesentium eveniet sapiente sunt itaque magni ipsum provident temporibus veritatis nisi alias molestias hic, architecto id odit.</p>
            <p className="text" style={{color:font, textTransform:fontUppercase}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ratione fugit mollitia dicta, praesentium eveniet sapiente sunt itaque magni ipsum provident temporibus veritatis nisi alias molestias hic, architecto id odit.</p>
        </div>
    ) 
}

Text.defaultProps = {
    font:'red',
    fontUppercase: 'uppercase'
}

export default Text

