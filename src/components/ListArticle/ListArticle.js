import { Link } from "react-router-dom";
import "./ListArticle.scss";
import ListData from "./list.json";
import ArticleData from "../ArticleData/ArticleData";
export default function ListArticle() {
    return (
        <div className="listarticle-body">
            <ul className="Listarticle-main-div">
                {
                    ListData.list.map(li => (
                        <ArticleData
                            image={li.image}
                            name={li.name}
                            message={li.message}
                            link={li.link}
                        />
                    ))
                }
            </ul>    
        </div>
    )
}