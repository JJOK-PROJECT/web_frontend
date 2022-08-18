import './Login.css';
import { Link } from 'react-router-dom'; // eslint-disable-line no-unused-vars
import Lion from '../../components/Login_function/Loginfunction'; // eslint-disable-line no-unused-vars
import React, { useState } from 'react';  // eslint-disable-line no-unused-vars

export default function Login(){

    
    return(
        <body>
        <form className="Login_tit">
            <div id="Login_text">
                <p>Log in</p>
            </div>
            <div className="Login_input">
                <div id="Login_id_text">
                    <input type="text" id="id_text" placeholder="ID"/>
                </div>
                <div id ="Login_pw_text">
                    <input type="password" id="pw_text" />
                </div>
                <div className="login_button_className">
                    <button id="Login_button">확인</button>
                </div>
            </div>
            <div className ="login_add_button">
                <div id = "signup_button">
                    <Link to='/signup'>
                        <button id ="sign_up" type="button">
                            회원가입
                        </button>
                    </Link>
                </div>
                <div id="find_id_pw">
                    <button id="find" type="button">
                        아이디/비밀번호를 잊어버리셨나요?
                    </button>
                </div>
            </div>
        </form>
        </body>
    )
}


