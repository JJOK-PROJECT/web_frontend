import "./CommunNav.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Categories from './CommCategory';
function CommunNav() {

    const [selectedCategory, setSelectedCategory] = useState(Categories.normal);
    const categories = [Categories.normal, Categories.anonym, Categories.hotadvice];

    useEffect(() => {
        // reset data by selected category
    }, [selectedCategory])


    return (
        <nav className="CommunNav-nav">
            <div className="CommunNav-nav-div">
                {
                    categories.map(c => (
                        <div className="CommunNav-nav-div-link-div" style={{ textDecoration: "none" }}>
                        <Link to = {`${c.link}`} style={{ textDecoration: "none" }}>
                            <div
                                className={`look-category-section-category ${selectedCategory === c ? 'selected' : ''}`}
                                onClick={() => setSelectedCategory(c)}
                            >
                                <span>{c.text}</span>
                            </div>
                        </Link>
                            </div>
                    ))
                }
            </div>
        </nav>
    )
}
export default CommunNav;