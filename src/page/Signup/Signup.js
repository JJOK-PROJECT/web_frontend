import './Signup.scss';
import { Link } from 'react-router-dom';


export default function Signup(props){
    
    return(
        <div className='Signup_tit'>
            <div className='welbato_logo_top'>
                welbato
            </div>    
            <div className='Sign_up'>
                <div className='sign_up_all'>
                    <div className='tit'>
                        <div className='ment'>아이디</div>
                        <div className='insert'>
                            <input type={'text'} placeholder="아이디 입력" className='text'/>
                        </div>
                    </div>
                    <div className='tit'>
                        <div className='ment'>비밀번호</div>
                        <div className='insert'>
                            <input type={'text'} placeholder="비밀번호(숫자,영문,특수문자 조합 최소 8자)" className='text'/>
                        </div>
                    </div>

                    <div className='tit'>
                        <div className='ment'>비밀번호 재입력</div>    
                        <div className='insert'>
                            <input type={'text'} placeholder="비밀번호(숫자,영문,특수문자 조합 최소 8자)" className='text'/>
                        </div>
                    </div>

                    <div className='tit'>
                        <div className='ment'>이름</div>
                        <div className='insert'>
                            <input type={'text'} placeholder="이름 입력" className='text'/>
                        </div>
                    </div>
                    <div className='tit'>
                        <div className='ment'>이메일</div>
                        <div className='insert'>
                            <input type={'text'} placeholder="이메일 입력" className='text'/>
                            <div className='button'>
                                <button type='button'>인증</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    <div className='tit'>
                        <div className='ment'>인증번호</div>
                        <div className='insert'>
                            <input type={'text'} placeholder="이메일 인증번호 입력" className='text'/>
                            <div className='button'>
                                <button type='button'>확인</button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='tit'>
                            <div className='ment'>입학년도</div>
                            <div className='insert'>
                                <input type={'text'} placeholder= "재학생만 입력 ex) 0000년" className='text'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
            <div className='checkbutton'>
                <button className='checkbutton_button'>
                    확인
                </button>
            </div>
        </div>
    )
}