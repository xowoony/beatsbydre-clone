import { styled } from "styled-components";
import Footer from "../Components/Footer";

const Wrapper = styled.div`
  height: 100vh;
`;

// section1
const Section1 = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 20rem;
  background-color: #231f27;
  height: 41rem;
  color: #ffd400;
  div {
    width: 100%;
    height: 10rem;
    align-items: center;
    display: flex;
    justify-content: flex-start;
    div:nth-child(4) {
      color: #ffd400;
    }
  }

  img {
    height: 48rem;
    width: 56rem;
    margin-top: 7rem;
  }
`;

const InfoContainer = styled.div`
  /* margin-left: 12rem; */
`;

// 제품 설명
const Info = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 13rem;
  justify-content: center;
  margin-left: -4rem;
  div {
    color: rgb(255, 255, 255);
  }

  div:nth-child(1) {
    font-family: "Montserrat", sans-serif;
  }
  div:nth-child(2) {
    font-size: 2.7rem;
    font-weight: 600;
    padding: 15px 0 40px 0;
    font-family: "Montserrat", sans-serif;
  }

  div:nth-child(4) {
    color: rgb(0, 0, 0);
    font-size: 14.5px;
    margin-top: 15px;
  }

  span:nth-child(1) {
    font-family: "Montserrat", sans-serif;
    font-size: 38px;
  }
`;

// Info 2
const Info2 = styled(Info)`
  margin: 7rem;
  div {
    color: rgb(0, 0, 0);
    font-family: "Montserrat", sans-serif;
  }
  div:nth-child(1) {
    font-size: 17px;
  }
  div:nth-child(2) {
    font-size: 52px;
    font-weight: 600;
    padding: 15px 0 25px 0;
  }
  div:nth-child(3) {
    font-size: 38px;
  }
  div:nth-child(4) {
    color: rgb(0, 0, 0);
    font-size: 16.5px;
    margin-top: 15px;
  }
  div:nth-child(6) {
    margin-top: 1rem;
    font-size: 13px;
    color: #575353;
  }
`;

// BUY NOW Button
const BuyButton = styled.button`
  color: rgb(0, 0, 0);
  border-radius: 3rem;
  background-color: #ffd400;
  font-family: "Kanit", sans-serif;
  font-size: 15.5px;
  font-weight: 600;
  width: 10.5rem;
  height: 2.5rem;
  border-style: none;
  margin-left: 42px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    background-color: #231f27;
    border: 0.0625rem solid #ffd400;
    color: white;
  }
`;

// section2
const Section2 = styled(Section1)`
  background-color: white;
  height: 2.5rem;
`;

// section3
const Section3 = styled(Section1)`
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  height: 28rem;
`;

const BuyButton2 = styled(BuyButton)`
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  &:hover {
    color: black;
    border: 0.0625rem solid rgb(0, 0, 0);
    background-color: rgb(255, 255, 255);
  }
`;

// section4
const Section4 = styled(Section1)``;

function Home() {
  return (
    <Wrapper>
      {/* section 1 */}
      <Section1>
        <div>
          <img src="studio3wireless.png" alt="" />
        </div>
        <InfoContainer>
          <Info>
            <div>Beats Studio3 Wireless</div>
            <div>
              Experience your <br />
              music like never before.
            </div>
            <div>
              <span>$299.95</span>
              <span>
                <BuyButton>BUY NOW</BuyButton>
              </span>
            </div>
            <div>
              $60 Apple Music gift card with purchase of select Beats products.*
            </div>
          </Info>
        </InfoContainer>
      </Section1>
      {/* section 2 */}
      <Section2></Section2>
      {/* section 3 */}
      <Section3>
        <Info2>
          <div>Portable Wireless Speaker</div>
          <div>Beats Pill</div>
          <div>Available Colors</div>
          <div style={{ color: "rgb(0,0,0)" }}>Find your Color</div>
          <div>
            <span>$299.95</span>
            <span>
              <BuyButton2>BUY NOW</BuyButton2>
            </span>
          </div>
          <div>
            $60 Apple Music gift card with purchase of select Beats products.*
          </div>
        </Info2>
        <div>
          <img
            src="pill.png"
            alt=""
            style={{ height: "25rem", width: "52rem", marginTop: "7rem" }}
          />
        </div>
      </Section3>
      <Section4></Section4>
      <Footer />
    </Wrapper>
  );
}

export default Home;
