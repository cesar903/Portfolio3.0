import { NavLink } from "react-router-dom";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { RxVideo } from "react-icons/rx";
import { TbUserSquare } from "react-icons/tb";
import styled from "styled-components";

const MenuContainer = styled.div`
  background-color: #fff;
  border-top: 1px solid #ddd;
`;

const MenuLink = styled(NavLink)`
  color: gray;
  text-decoration: none;

  &.active {
    color: black;
  }
`;

function Menu() {
  return (
    <MenuContainer>
      <div className="container">
        <div className="row justify-content-center align-items-center text-center pt-4 pb-4">
          <div className="col-4">
            <MenuLink to="/" end>
              <BsFillGrid3X3GapFill size={24} />
            </MenuLink>
          </div>
          <div className="col-4">
            <MenuLink to="/knowledge">
              <RxVideo size={28} />
            </MenuLink>
          </div>
          <div className="col-4">
            <MenuLink to="/marking">
              <TbUserSquare size={28} />
            </MenuLink>
          </div>
        </div>
      </div>
    </MenuContainer>
  );
}

export default Menu;
