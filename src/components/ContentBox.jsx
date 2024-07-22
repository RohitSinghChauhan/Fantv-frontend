import Button from "./Button"
import comingsoon1 from '../assets/comingsoon1.png'
import comingsoon2 from '../assets/comingsoon2.png'
import pattern1 from '../assets/pattern.png'
import pattern2 from '../assets/pattern2.png'
import pattern3 from '../assets/pattern3.png'

const ContentBox = ({ title, content, isAvailable, index }) => {

    return (
        <div style={{
            width: '400px', height: '260px', backgroundColor:
                (index === 0 && '#6B61FF') || (index === 1 && '#FE9BF3') || (index === 2 && '#ADFFE4'),
            borderRadius: '24px', padding: '2rem 1.8rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            position: 'relative', overflow: 'hidden'
        }}>
            <p style={{ fontSize: '32px', color: index === 0 ? '#EDF0FF' : '#1E1E1E' }}>{title}</p>
            <p style={{ letterSpacing: '1px', fontSize: '16px', color: index === 0 ? '#EDF0FF' : '#1E1E1E' }}>{content}</p>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                {isAvailable ? <Button label='Deploy' style={{ backgroundColor: 'white', border: 'none', color: 'black' }}
                    alternateButton={true} />
                    : <img src={index === 2 ? comingsoon1 : comingsoon2}
                        style={{ bottom: '0', zIndex: 2 }} alt='' />
                }
            </div>

            <img src={(index === 0 && pattern1) || (index === 1 && pattern3) || (index === 2 && pattern2)}
                style={{ position: 'absolute', bottom: '0' }} alt='' />
        </div>
    )
}

export default ContentBox