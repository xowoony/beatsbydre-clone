import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

// 헤더 (카테고리)
const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 15px;
  padding: 20px 110px;
  color: white;
  background-color: #0000001f;
  height: 5rem;
`;

// 로고
const Logo = styled.img`
  width: 3rem;
`;

// Info
const Info = styled.div`
  width: 11.5rem;
  display: flex;
  justify-content: space-between;
  img {
    width: 1.7rem;
  }
`;

function Header() {
  return (
    <Nav>
      <Link to="/">
        <Logo src="logo.jpg" alt="" />
      </Link>
      <Link to="/headphones">HEADPHONES</Link>
      <Link to="/earphones">EARPHONES</Link>
      <Link to="/speakers">SPEAKERS</Link>
      <Link to="/explore">EXPLORE</Link>
      <Info>
        <Link to="/">
          <img src="search.png" alt="" />
        </Link>
        <Link to="/">
          <img src="profile.png" alt="" />
        </Link>
        <Link to="/">
          <img src="buy.png" alt="" />
        </Link>
      </Info>
    </Nav>
  );
}

export default Header;
