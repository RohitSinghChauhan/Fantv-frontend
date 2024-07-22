import styles from '../modules/network.module.css'
import network from '../assets/network.png'
import ContentBox from '../components/ContentBox'

const contentData = [{
    id: 1, title: 'Content Nodes',
    content: 'Content Nodes, Earn rewards for supplying their GPU, Storage and bandwidth for dCDN',
    isAvailable: true
},
{
    id: 2, title: 'Orchestrators',
    content: 'Orchestrators will be responsible for connecting the client with the content node for seamless streaming. Traffic distribution will be based on multiple factors like job type, performance',
    isAvailable: false
},
{
    id: 3, title: 'Validators',
    content: 'Validators will be responsible for validating the execution of dCDN Network. Validators will earn rewards from Staking and earn a cut on the executions validated.',
    isAvailable: false
}];

const NetworkSection = () => {

    return (
        <div style={{
            width: '100%', height: '100%', backgroundColor: '#2A2A2B', padding: '4rem 0', position: 'relative'
        }}>
            {/*TOP CURVED BORDER*/}
            <div style={{
                width: '100%', display: 'flex', justifyContent: 'center',
                position: 'absolute', top: '-0.1rem',
            }}>
                <div style={{
                    background: 'linear-gradient(to top, rgba(41, 41, 41, 0) 0%, #FFFFFF 100%, rgba(41, 41, 41, 0) 100%)',
                    width: '35%', height: '0.20rem', margin: 'auto', opacity: '0.280', borderRadius: '100%', zIndex: '20',
                    border: '0.25px solid'
                }}>
                </div>

                <img src={require('../assets/small_ellipse.png')} alt='' style={{
                    position: 'absolute',
                    transform: 'scaleY(-1)', top: '0', width: '100%', opacity: '0.13',
                }} />
            </div>
            {/*TOP CURVED BORDER*/}

            <div className={styles.container1}>
                <div className={styles.container1_sub1}>
                    <div className={styles.textlineContainer}>
                        <p className={styles.textline}>
                            FanCloud CDN network revolutionizes video infrastructure
                        </p>
                        <p className={styles.textline}>with community-driven Innovation</p>
                    </div>
                </div>

                <div style={{ padding: '0 21%' }}>
                    <p style={{ color: '#D2D2D2', textAlign: 'center', lineHeight: '1.2rem', fontSize: '14px', letterSpacing: '1px' }}>FanCloud pioneers a new era of connectivity with its decentralised content delivery network (dCDN),
                        leveraging a global network of community-powered nodes.
                        By harnessing a decentralised architecture,
                        dCDN drastically reduces data transfer and compute costs while enhancing load time. Join FanCloud’s
                        dCDN network and experience the future of seamless, secure and community- driven consumption</p>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                <img src={network} alt='' style={{ width: '60%', height: '60%' }} />
            </div>

            <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                gap: '2rem', marginTop: '5rem', marginBottom: '2rem'
            }}>
                {contentData.map((e, i) => (
                    <ContentBox key={e.id} title={e.title} content={e.content}
                        isAvailable={e.isAvailable}
                        index={i} />
                ))}
            </div>
        </div >
    )
}

export default NetworkSection