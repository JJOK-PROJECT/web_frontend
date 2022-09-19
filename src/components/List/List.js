import './List.scss';
import {Link} from "react-router-dom";
export default function List(props){
    return(
        <div className='list-card'>
            <div className='list-card-thum'>
                <Link to={`/welbato/${props.link}`}>
                    <div className='list-card-div'>
                        <div className='list-card-div-listcard'>
                            <div className='list-card-div-listcard-front'>
                                <div className='list-card-div-listcard-front-img'>
                                    <img className='list-card-div-image' src={props.image} alt="list" width={30} />
                                </div>
                                <div className='list-card-div-listcard-front-name'>
                                    <span className='list-card-div-name' alt="list">
                                        {props.name}
                                    </span>
                                </div>
                            </div>
                            <div className='list-card-div-listcard-back'>
                                <div className='list-card-div-listcard-back-message'>
                                    <span className='list-card-div-message' alt="list">
                                        {props.message}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}