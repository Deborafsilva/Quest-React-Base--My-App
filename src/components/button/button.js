import './button.css'

const Button = (props) => {
    const message = () =>{
        alert('"A label desse botão é Baixar CV"')
    }

    return (
        <div className='container'>
            <button className='btn' onClick={message}>{props.label}</button>
        </div>
    )  
}

export default Button

