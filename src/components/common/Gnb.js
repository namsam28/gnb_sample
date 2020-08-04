import React from "react";
import { NavLink } from "react-router-dom";

const Gnb = () => {
    return (
        <div className="gnb">
            <ul>
                <li>
                    <NavLink activeClassName="active" to="/" exact>
                        1번메뉴 - 홈
                    </NavLink>
                </li>

                <li>
                    <NavLink activeClassName="active" to="/intro">
                        2번메뉴 - 소개페이지
                    </NavLink>
                </li>

                <li>
                    <NavLink activeClassName="active" to="/mypage">
                        3번메뉴 - 마이페이지
                    </NavLink>
                </li>

                <li>
                    <NavLink activeClassName="active" to="/etc">
                        4번메뉴 - etc페이지
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Gnb;
