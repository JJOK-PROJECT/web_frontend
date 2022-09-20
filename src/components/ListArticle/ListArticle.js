import {Link} from "react-router-dom";
import "./ListArticle.scss";
export default function ListArticle(props){
    return(
        <>
        <div className="listarticle-tit">
            <div className="listarticle-tit-thumbnail">
                <div className="list-article-tit-div">   
                <a className="list-article-a"> 
                    <Link to={`/welbato/${props.link}`}>
                        <div className="list-article-tit-div-front">
                            <div className="list-article-div-img">
                                <img className="list-article-image" src={props.image} alt="product"/>
                            </div>
                            <div className="list-article-div-name">
                                <span className="list-article-name">
                                    {props.name}
                                </span>
                             </div>
                        </div>
                        <div className="list-article-tit-div-back">
                            <div className="list-article-div-message">
                                    <span className="list-article-nessage">
                                        {props.message}
                                    </span>
                            </div>
                        </div>    
                    </Link></a>
                </div>
            </div>
        </div>
        </>
    )
}