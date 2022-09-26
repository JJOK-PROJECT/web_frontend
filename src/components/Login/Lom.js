import React, { useState } from 'react';
import { TextField } from "@material-ui/core";
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
        //     if (realId === setId) {
        //         targets.disabled = false;
        //     }
        //     else targets.disabled = true;
    }
    const handleinputpw = (e) => {
        setPw(e.target.value);
        //     if (realPw === setPw) {
        //         targets.disabled = false;
        //     }
        //     else targets.disabled = true;
    }
    const [modalOpen, setModalOpen] = useState(false);
    const Login = () => {
        if (realId === id && realPw === pw) {
            nav('/loginmain');
        }
        else {
            alert('비밀번호를 다시 확인해주세요!');
        }
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
                    <img src='icon/logon.png' />
                </div>
                <div className='l-title'>
                    <b>로그인</b>
                    <img className='img-t' src='icon/36.png' />
                </div>
                <div className='login-field'>
                    <TextField id="login-basic" label="ID 입력" variant="outlined" style={{ width: '250%' }} value={id} onChange={handleinputid} />
                    <br /><br />
                    <TextField type="password" id="password-basic" label="PW 입력" variant="outlined" style={{ width: '250%' }} value={pw} onChange={handleinputpw} />
                </div>
                <div className='let-go'>
                    <button onClick={()=>Login()}>로그인</button>
                </div>
                <div className='accounting'>
                    <span>회원가입</span>
                    <br />
                    <span>비밀번호를 잊어버리셨나요?</span>
                </div>
            </Modal>
        </React.Fragment>
    );
}

export default App;