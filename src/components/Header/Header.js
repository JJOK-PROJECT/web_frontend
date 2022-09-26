import './Header.scss';
import {Link} from "react-router-dom";
export default function header(){
    return(
        <body className='header_body'>
            <div className='Header_t'>
                <div className='header-total'>
                    <div className='header_total'>
                        <div className="header_tit">
                            <div className="logo">
                                <Link to ="/">
                                    <img src='icon/logo.png' />
                                </Link>
                            </div>

                            <div className="header_button">
                                <div className="login_button" id="headerbutton">
                                    <button>
                                        로그인
                                    </button>
                                </div>
                                <Link to="">
                                    <div className="signup_button" id="headerbutton">
                                        <button>
                                            회원가입
                                        </button>
                                    </div>
                                </Link>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </body>
    )
}