import { styled } from "styled-components";


// grid
const GridItem = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 37rem;
  background-color: #f7f7f9;
  span:nth-child(1) {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
  }
  /* 이미지 */
  img {
    width: 15rem;
    height: 21rem;
    margin: 1rem;
  }
`;
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

const BuyButton2 = styled(BuyButton)`
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  &:hover {
    color: black;
    border: 0.0625rem solid rgb(0, 0, 0);
    background-color: rgb(255, 255, 255, 0%);
  }
`;

const ProductInfo = styled.div`
  div {
    margin-bottom: 5px;
  }
  div:nth-child(3) {
    margin-bottom: 2rem;
  }
`;

const PriceInfo = styled.div`
  span:nth-child(1) {
    font-size: 1.7rem;
    color: #af9716;
  }
`;


function Grid() {
  return (
    <GridItem>
      <img src="product0.png" alt="" />
      <div>
        <div
          style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            marginBottom: "12px",
          }}
        >
          Beats
        </div>
        <ProductInfo>
          <div>Up to 8 hours of battery life</div>
          <div>With Fast Fuel, a 5-minute charge = 2</div>
          <div>hours of playback</div>
        </ProductInfo>
        <PriceInfo>
          <span>$299.95</span>
          <span>
            <BuyButton2 style={{ fontWeight: "100" }}>BUY NOW</BuyButton2>
          </span>
        </PriceInfo>
      </div>
    </GridItem>
  );
}

export default Grid;
