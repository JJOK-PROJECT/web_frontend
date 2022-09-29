import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from './Loginmodal';
import './Lom.scss';
function App() {
    const realId = "kiki@naver.com";
    const nav = useNavigate();
    const realPw = "12345678";
    let [id, setId] = useState('');
    let [pw, setPw] = useState('');
    const handleinputid = (e) => {
        setId(e.target.value);
    }
    const handleinputpw = (e) => {
        setPw(e.target.value);
    }
    const [modalOpen, setModalOpen] = useState(false);
    const Login = () => {
        if (realId === id && realPw === pw) {
            closeModal();
            nav('/');
        }
        else {
            alert('비밀번호를 다시 확인해주세요!');
        }
    }
    const Signup = () => {
        closeModal();
        nav('/signup');
    }
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <React.Fragment>
            <button onClick={openModal}>로그인</button>
            <Modal open={modalOpen} close={closeModal}>
                <div className='l-header'>
                    <img src='icon/logo.png' width="150" height="26" />
                </div>
                <div className='l-title'>
                    <b>로그인</b>
                    <img className='img-t' src='https://ifh.cc/g/MYRSY6.png' width="50" height="70"/>
                </div>
                <div className='login-field'>
                    <input id="login-basic" placeholder='ID 입력' onChange={handleinputid}></input>
                    <br />
                    <input id="password-basic" placeholder='PW 입력' type='password' onChange={handleinputpw}></input>
                </div>
                <div className='let-go-tit'>
                    <div className='let-go'>
                        <button onClick={()=>Login()}>로그인</button>
                    </div>
                </div>
                <div className='accounting'>
                    <span onClick={()=>Signup()}>회원가입</span>
                    <br />
                    <span>비밀번호를 잊어버리셨나요?</span>
                </div>
            </Modal>
        </React.Fragment>
    );
}

export default App;