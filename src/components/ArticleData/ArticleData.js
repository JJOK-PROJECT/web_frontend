import './ArticleData.scss';
import { Link } from "react-router-dom";
export default function ArticleData(props){
    return(
        <li className="listarticle-tit-div">
            <Link to={`/welbato/${props.link}`}>
                <div className="list-article-div-img">
                    <img className="list-article-image" src={props.image} alt="product" />
                </div>
            </Link>

            <div className="list-article-div-name">
                <span className="list-article-name">
                    {props.name}
                </span>
            </div>
        </li>   
    )
}