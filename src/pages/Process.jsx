import styles from '../modules/process.module.css'

const Process = () => {
    return (
        <div style={{
            width: '100%', height: '84vh', backgroundColor: '#1E1E1E', padding: '4rem 0',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
        }}>
            <div className={styles.textlineContainer}>
                <p className={styles.textline}>
                    The transition CDN-dCDN
                </p>
                <p style={{
                    color: '#D2D2D2', textAlign: 'center', lineHeight: '1.2rem',
                    fontSize: '14px', letterSpacing: '1px'
                }}>
                    FanCloud pioneers a new era of connectivity with its decentralised content delivery network (dCDN),
                    leveraging a global network of community-powered nodes. By harnessing a decentralised architecture,
                    dCDN drastically reduces data transfer and compute costs while enhancing load time. Join FanCloud’s
                    dCDN network and experience the future of seamless, secure and community- driven consumption
                </p>
            </div>
        </div>
    )
}

export default Process