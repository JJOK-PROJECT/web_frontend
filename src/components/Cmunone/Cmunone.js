import './Cmunone.scss';
import { Link } from 'react-router-dom';


function Cmunone(props) {
    return (
        <div className='Cmunone-tit-tit'>
        <Link to={`/product/${props.id}`} style={{ textDecoration: "none" }}>
            <div className='Cmunone-list-one'>
                <div className='Cmunone-list-one-div'>
                    <span className='Cmunone-list-title'>
                        {props.title}
                    </span>
                    <span className='Cmunone-list-right'>
                        <span className='Cmunone-list-writer'>
                            {props.userName}
                        </span>
                        <span className='Cmunone-list-day'>
                            {props.upload_date}
                        </span>
                    </span>
                </div>

            </div>
        </Link>
        </div>
    )
}
export default Cmunone;