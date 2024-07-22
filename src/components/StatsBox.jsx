import small_ellipse from '../assets/small_ellipse.png'
import plus from '../assets/plus.png'

const StatsBox = ({ label, value, sub = '' }) => {
    return (
        <div style={{
            width: '600px', height: '212px', borderRadius: '24px', backgroundColor: 'white',
            display: 'flex', padding: '2rem', position: 'relative', overflow: 'hidden', zIndex: 5
        }}>
            <div style={{
                display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', width: '90%'
            }}>
                <div style={{ display: 'flex', gap: '0.6rem' }}>
                    <p style={{ fontSize: '30px', fontWeight: '500' }}>{label}</p>
                    <p style={{ alignSelf: 'flex-end', paddingBottom: '0.2rem', fontWeight: '500' }}>{sub}</p>
                </div>

                <p style={{ fontFamily: 'Bricolage Grotesque', fontSize: '80px', lineHeight: '67px' }}>{value}</p>
            </div>

            <div style={{ width: '10%', display: 'flex', justifyContent: 'flex-end' }}>
                <img src={plus} alt='' style={{ width: '2.4rem', height: '3rem', objectFit: 'cover' }} />
            </div>

            <img src={small_ellipse} alt='' style={{ position: 'absolute' }} />
        </div>
    )
}

export default StatsBox