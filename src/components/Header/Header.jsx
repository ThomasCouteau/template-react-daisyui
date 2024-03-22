import React from "react";
import { useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className="navbar bg-neutral">
            <div className="navbar-start px-8">
                <button className="btn btn-ghost text-xl text-text" onClick={() => navigate('/')}>Header</button>
            </div>
        </div>
    )
}

export default Header;