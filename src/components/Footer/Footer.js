import './Footer.scss';
export default function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='footer-copy'>
                    <span>Copyright©welbato</span>
                </div>
                <div className='footer-developer'>
                    <span>Developer - </span>
                    <a href='https://github.com/Lovingcats' target='_blank'><span>App</span></a>
                    <span> | </span>
                    <a href='https://github.com/sookyoungwoo' target='_blank'><span>Web</span></a>
                    <span> | </span>
                    <a href='https://github.com/B-KJS26' target='_blank'><span>App,Web</span></a>
                    <span> | </span>
                    <a href='https://github.com/over1234' target='_blank'><span>Back-end</span></a>
                </div>
            </div>
        </>
    )
}