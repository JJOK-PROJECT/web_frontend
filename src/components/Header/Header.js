import './Header.scss';
export default function header(){
    return(
        <>
            <body>
                <div className='total'>
                    
                    <div className='header_total'>
                        <div className="header_tit">
                            <div className="logo">
                                <img src='icon/logo.png' />
                            </div>

                            <div className="header_button">
                                <div className="login_button" id="headerbutton">
                                    <button>
                                        로그인
                                    </button>
                                </div>
                                <div className="signup_button" id="headerbutton">
                                    <button>
                                        회원가입
                                    </button>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </body>
        </>
    )
}