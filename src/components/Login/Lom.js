import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from './Loginmodal';
import { customAxios } from "../../config/axiosConfig";
import logo from '../../assets/icon/logo.png'
import './Lom.scss';
function App() {

    const [request, setRequest] = useState({})

    const handleChange = e => {
        setRequest({
            ...request, [e.target.name]: e.target.value
        })
    }

    const login = async () => {
        try {
            const request = await customAxios.post("/login/signin", request);
            localStorage.setItem("token", request.token)
            window.location.href = "/"
            alert("좋아");
        } catch (error) {
            alert("계정 정보가 올바르지 않습니다!");
        }   
    }

    const nav = useNavigate();


    const [modalOpen, setModalOpen] = useState(false);

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
            <button onClick={openModal} className="modalbutton-login">로그인</button>
            <Modal open={modalOpen} close={closeModal}>
                <div guclassName='l-header'>
                    <img src={logo} width="150" height="26" />
                </div>
                <div className='l-title'>
                    <b>로그인</b>
                    <img className='img-t' src='https://ifh.cc/g/MYRSY6.png' width="50" height="70" />
                </div>
                <div className='login-field'>
                    <input id="login-basic" placeholder='ID 입력'onChange={handleChange} ></input>
                    <br />
                    <input id="password-basic" placeholder='PW 입력' type='password' onChange={handleChange}></input>
                </div>
                <div className='let-go-tit'>
                    <div className='let-go'>
                        <button onClick={login}>로그인</button>
                    </div>
                </div>
                <div className='accounting'>
                    <span onClick={() => Signup()}>회원가입</span>
                </div>
            </Modal>
        </React.Fragment>
    );
}

export default App;