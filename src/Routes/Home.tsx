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

const InfoContainer = styled.div``;

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
  margin: 6rem;
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
    font-size: 41px;
  }
  div:nth-child(4) {
    color: rgb(0, 0, 0);
    font-size: 16.5px;
    margin-top: 15px;
  }
  div:nth-child(6) {
    margin-top: 1rem;
    font-size: 13px;

  }
  div:nth-child(7) {
    margin-top: 1rem;
    color: #575353;
  }
`;

// Color Container
const ColorContainer = styled.div`
  width: 30rem;
  height: 3rem;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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
  height: 32rem;
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
const Section4 = styled.div`
  background-color: rgb(255, 255, 255);
  display: grid;
  gap: 2.5rem;
  grid-template-columns: repeat(3, 1fr);
  list-style-type: none;
  margin: 6rem;
  margin-bottom: 25rem;
`;


// grid
const Grid = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 37rem;
  background-color: #f7f7f9;
  span:nth-child(1) {
    font-family: 'Montserrat', sans-serif;
    font-weight:600;
  }
  img {
    width: 12rem;
    height: 16rem;
    margin: 1rem;
  }
  div{
    :nth-child(1){
      font-size: 2rem;
      color: #000000;
      font-weight:400;
    }
    :nth-child(2) {
      margin: 1rem 0 1.5rem 0;
    }
    }
  
`;

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
          <div style={{ color: "rgb(0,0,0)", marginLeft: "7px" }}>
            Find your Color
          </div>
          <ColorContainer>
            <img
              src="Oval.png"
              alt=""
              style={{
                width: "2.5rem",
                height: "2.5rem",
                marginTop: "1rem",
                marginRight: "0.7rem",
              }}
            />
            <img
              src="OvalCopy.png"
              alt=""
              style={{
                width: "2.5rem",
                height: "2.5rem",
                marginTop: "1rem",
                marginRight: "0.7rem",
              }}
            />
            <img
              src="OvalCopy2.png"
              alt=""
              style={{
                width: "2.5rem",
                height: "2.5rem",
                marginTop: "1rem",
                marginRight: "0.7rem",
              }}
            />
          </ColorContainer>
          <div>
            <span>$299.95</span>
            <span>
              <BuyButton2>BUY NOW</BuyButton2>
            </span>
          </div>
          <div style={{ fontSize: "14px" }}>
            $60 Apple Music gift card with purchase of select Beats products.*
          </div>
        </Info2>
        <div>
          <img
            src="pill.png"
            alt=""
            style={{
              height: "25rem",
              width: "52rem",
              marginTop: "7rem",
              marginRight: "2rem",
            }}
          />
        </div>
      </Section3>
      {/* section4 */}
      <Section4>
        <Grid>
          <img src="product0.png" alt="" />
          <div>
            <div>Beats</div>
            <div>
              Up to 8 hours of battery life<br/>With Fast Fuel, a 5-minute charge = 2
              <br/>hours of playback
            </div>
            <div>
            <span>$299.95</span>
            <span>
              <BuyButton2>BUY NOW</BuyButton2>
            </span>
          </div>
          </div>
          
        </Grid>
        <Grid></Grid>
        <Grid></Grid>
        <Grid></Grid>
        <Grid></Grid>
        <Grid></Grid>
      </Section4>
      <Footer />
    </Wrapper>
  );
}

export default Home;
