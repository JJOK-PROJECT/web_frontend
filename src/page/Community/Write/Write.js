import './Write.scss';

export default function Write(props) {
   
// const onImgInputBtnClick = (event:any) => {
//     event.
// }
console.log(props);
    return (
        <>
            <section className='Write-section'>
                <div className='Write-tit'>
                    <div className='Write-top'>
                        <input type='text' placeholder='제목 입력'/>
                    </div>
                    <div>

                    </div>
                    <div className='Write-middle'>
                        {/* <input ref={logoImgInput} type='file' className='imgInput' id='logoImg'
                        accept='image/*' name='file' onChange={onImgChange}/> */}

                        <textarea placeholder='글 작성'/>
                    </div>
                    <div className='Write-bottom'>
                        <button>
                            작성 완료
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}