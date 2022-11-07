import './Header.scss';
import Login from '../Login/Lom';
import { Link } from 'react-router-dom';
import logo from '../../assets/icon/logo.png'
export default function header() {
    return (
        <body className='header_body'>
            <div className='Header_t'>
                <div className='header-total'>
                    <div className='header_total'>
                        <div className="header_tit">
                            <div className="logo">
                                <Link to='/'>
                                    <img src={logo} />
                                </Link>
                            </div>
                            <div className="header_button">
                                <div className="login_button" id="headerbutton">
                                    <button className='login-button-Login'>
                                        <Login />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}