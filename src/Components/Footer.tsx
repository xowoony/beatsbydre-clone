import { Link } from "react-router-dom";
import { styled } from "styled-components";

const FooterContainer = styled.nav`
  background-color: #231f27;
  padding: 3.5rem 12rem 1rem 12rem;
`;

const Nav = styled.nav`
  div {
    color: rgb(159, 159, 159);
    font-size: 13.5px;
    margin-bottom: 8px;
    font-weight: 500;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
          backgroundColor: "transparent",
          height: "12rem",
          color: "white",
        }}
      >
        <Nav>
          <h1
            style={{
              fontSize: "25px",
              marginBottom: "8px",
              fontWeight: "500",
            }}
          >
            Products
          </h1>
          <div>
            <Link to="/headphones" style={{ marginBottom: "8px" }}>
              HEADPHONES
            </Link>
          </div>

          <div>
            <Link to="/earphones" style={{ marginBottom: "8px" }}>
              EARPHONES
            </Link>
          </div>
          <div>
            <Link to="/speakers" style={{ marginBottom: "8px" }}>
              SPEAKERS
            </Link>
          </div>
          <div>ACCESSORIES</div>
          <div>COLLABORATIONS</div>
          <div>BEATSAUDIO</div>
          <div>SPECIAL OFFERS</div>
        </Nav>
        {/* Support */}
        <Nav>
          <h1
            style={{
              fontSize: "25px",
              marginBottom: "8px",
              fontWeight: "500",
              color: "#e8e2e2",
            }}
          >
            Support
          </h1>
          <div>
            <Link to="/s">PRODUCT HELP</Link>
          </div>

          <div>
            <Link to="/">SERVICE & WARRANTY</Link>
          </div>
          <div>
            <Link to="/">REGISTER YOUR BEATS</Link>
          </div>
          <div>UPDATE YOUR BEATS</div>
          <div>AUTHORIZED SERVICE PROVIDERS</div>
          <div>CONTACT SUPPORT</div>
          <div>INTERNATIONAL NUMBERS</div>
        </Nav>
        {/* Company */}
        <Nav>
          <h1
            style={{
              fontSize: "25px",
              marginBottom: "8px",
              fontWeight: "500",
              color: "#e8e2e2",
            }}
          >
            Company
          </h1>
          <div>
            <Link to="/">PRODUCT HELP</Link>
          </div>
          <div>
            <Link to="/">NEWS AND EVENTS</Link>
          </div>
          <div>
            <Link to="/s">PROMOTION TERMS</Link>
          </div>
          <div>PRIVACY POLICY</div>
          <div>TRADEMARK</div>
          <div>TERMS OF USE</div>
          <div>COOKIES</div>
        </Nav>
        <Nav>
        <h1
          style={{
            fontSize: "25px",
            marginBottom: "2rem",
            fontWeight: "500",
            color: "#e8e2e2",
          }}
        >
          Follow Us
        </h1>
        <div>
          <img src="sns.png" style={{width:"10rem", height:"2rem", marginBottom:"5rem"}} alt="" />
        </div>
        </Nav>
        
      </div>
      <div
        style={{
          color: "#9f9f9f",
          textAlign: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          height: "5rem",
          fontSize:"13px"
        }}
      >
        Copyright © 2020 Apple Inc. - All rights reserved.
      </div>
    </FooterContainer>
  );
}
export default Footer;
