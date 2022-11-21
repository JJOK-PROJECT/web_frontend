import "./CommunNav.scss";
import { Link } from "react-router-dom";

function CommunNav() {
    return (
        <nav className="CommunNav-nav">
            <div className="CommunNav-nav-div">
                <div className="CommunNav-nav-div-link-div"><Link to='/welbato/community' style={{ textDecoration: "none" }}><div><span>일반 커뮤니티</span></div></Link></div>
                <div className="CommunNav-nav-div-link-div"><Link to='/welbato/community/anonymous' style={{ textDecoration: "none" }}><div><span>익명 커뮤니티</span></div></Link></div>
                <div className="CommunNav-nav-div-link-div"><Link to='/welbato/community/hotadvice' style={{ textDecoration: "none" }}><div><span>뜨끈 조언</span></div></Link></div>
            </div>
        </nav>
    )
}
export default CommunNav;