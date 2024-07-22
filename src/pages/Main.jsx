import styles from '../modules/main.module.css';
import Button from '../components/Button';
import images from '../assets/group_images.png'
import StatsBox from '../components/StatsBox';

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.textContainer}>
                <p className={styles.gradientText}>Empowering the Digital Era:</p>
                <br />
                <p className={styles.gradientText}>Decentralizing Entertainment</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                <div className={styles.textline2Container}>
                    <p className={styles.textline2}>Join the world’s first DePIN: Revolutionizing Content Streaming with faster, Safer and Cheaper Access</p>
                    <p className={styles.textline2}>and Cheaper Access</p>
                </div>
            </div>

            <div className={styles.images} style={{ position: 'relative', zIndex: '10' }}>
                <div style={{ position: 'absolute', top: '-1.7rem' }}>
                    <Button label='Coming Soon' />
                </div>
                <img src={images} alt='' />

                <img src={require('../assets/small_ellipse.png')} alt='' style={{
                    position: 'absolute', top: '78%', width: '100%', transform: 'scaleY(-1)',
                    maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)'
                }} />
            </div>

            <div className={styles.statsBox} style={{ position: 'relative' }}>
                <StatsBox label='No. of Node Operators' value='2000' />
                <StatsBox label='Data Transferred in TB' sub='(last 30 days)' value='12,000' />

                <img src={require('../assets/small_ellipse.png')} alt='' style={{
                    position: 'absolute',
                    width: '100%', bottom: '100', opacity: '0.73',
                    maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)'
                }} />

                <img src={require('../assets/small_ellipse.png')} alt='' style={{
                    position: 'absolute',
                    transform: 'scaleY(-1)', top: '0%', width: '100%', opacity: '0.02',
                    maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)'
                }} />
            </div>

            <img src={require('../assets/blob.png')} alt='' style={{
                position: 'absolute', height: '100%', width: '100%', margin: 'auto', objectFit: 'fill',
                top: '0', zIndex: '9',
            }} />

        </div>

    )
}

export default Main