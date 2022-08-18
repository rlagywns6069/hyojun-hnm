import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";



const Navbar = ({authenticate, setAuthenticate}) => {
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성',];
  const navigate = useNavigate();
  const search = (event) => {
    if(event.key === "Enter"){
      let keyword = event.target.value;
      console.log(keyword);
      navigate(`/?q=${keyword}`)
    }
  }
  return (
    <div>
      <div>
        {authenticate?(<div className="login-button" onClick={() => setAuthenticate(false)}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그아웃</div>
        </div>):(
          <div className= "login-button" onClick={() => navigate("/login")}>
            <FontAwesomeIcon icon={faUser} />
            <div>로그인</div>
          </div>
        )}
      </div>
      <div className="nav-section">
        <Link to = "/">
        <img width={100}src="https://3dwarehouse.sketchup.com/warehouse/v1.0/content/public/3e17273b-330d-4466-b158-d302aaa27d43" alt = ""/>
        </Link>
      </div>
      <div className="menu-area">
          <ul className="menu-list">
            {menuList.map((menu) => <li>{menu}</li>)}
          </ul>
        <div className="input-area">
          <FontAwesomeIcon icon ={faSearch}/>
          <input type="text" placeholder="제품 검색" onKeyPress={(event) => search(event)}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
