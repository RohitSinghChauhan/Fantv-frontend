import icon from '../assets/button.png'
import altIcon from '../assets/button2.png'

const Button = ({ label, onClick = () => { }, style, alternateButton = false }) => {
    return (
        <button style={{
            backgroundColor: '#6C5FF5', color: 'white', width: '190px', height: '56px', borderRadius: '100px',
            display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.4rem', border: '1px solid transparent',
            ...style
        }}
            onClick={onClick}>
            <p style={{ fontFamily: 'Inter', fontSize: '1rem', color: alternateButton ? '#0C091B' : '#EDF0FF' }}>{label}</p>
            <img src={!alternateButton ? icon : altIcon} alt='' />
        </button>
    )
}

export default Button