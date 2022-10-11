import { Link } from "react-router-dom";
import "./ListArticle.scss";
export default function ListArticle(props) {
    return (
        <div className="listarticle-body">
                <div className="Listarticle-main-div">
                    <div className="listarticle-tit-div">
                        <div className="listarticle-tit-thumbnail">
                            <div className="list-article-tit-div">
                                <Link to={`/welbato/${props.link}`}>
                                    <div className="list-article-div-img">
                                        <img className="list-article-image" src={props.image} alt="product" />
                                    </div>
                                </Link>
                            </div>

                            <div className="list-article-div-name">
                                <span className="list-article-name">
                                    {props.name}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>    
        </div>
    )
}