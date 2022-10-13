import './Signup.scss';
import { Link } from 'react-router-dom'
export default function Singup() {
    return (
        <body className='hotbody'>
            <Link to='/'>
                <div className='logoed'>
                    <img src='icon/logo.png' width="150" height="28" alt='' />
                </div>
            </Link>
            <div className='registerform'>
                <h1 className='ugro'>회원가입</h1>
                <img className='so' src='icon/so.png' width="50" height="40" alt='정현우' />
                <form>
                    <input className='inputId' id="signup_input" placeholder='ID 입력' />
                    <input className='inputPw' id="signup_input" placeholder='PW 입력' />
                    <input className='inputName' id="signup_input" placeholder='이름 입력' />
                    <input className='inputM' placeholder='이메일 입력' />
                    <button className='inZButton'>인증하기</button>
                    <input className='inZ' id="signup_input" placeholder='인증번호 입력' />
                    <label className='je'>
                        <input type="radio" name='sin' value="재학생" />
                        <span>재학생</span>
                    </label>
                    <label className="jol">
                        <input type="radio" name='sin' value="졸업생" />
                        <span>졸업생</span>
                    </label>
                    <label className="hak">
                        <input type="radio" name='sin' value="학부모" />
                        <span>학부모</span>
                    </label>
                    <label className="il">
                        <input type="radio" name='sin' value="일반" />
                        <span>일반</span>
                    </label>
                    <div className='years'>
                        <text>입학년도</text>
                        <select name="년도">
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                        </select>
                    </div>
                    <button className='golog'>
                        <text>회원가입</text>
                    </button>
                </form>
            </div>
        </body>
    )
}