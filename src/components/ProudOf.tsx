import React from "react";
import styled from "styled-components";

const ProudOf = () => {
  return (
    <Proudstyle className="flex flex-col gap-[100px] mt-[90px] tb:px-0 px-4">
      <h1 className="proudOf__title">What we are proud of.</h1>
      <div className="proudOf__table ">
        <div className="proudOf__table__div bg-[white] py-[40px] px-[30px] rounded-lg shadow-md">
          <p className="p">20+</p>
          <p className="p2">Total top services</p>
          <p className="p3">
            Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.
          </p>
        </div>
        <div className="proudOf__table__div bg-[white] py-[40px] px-[30px] rounded-[10px] shadow-md">
          <p className="p">15+</p>
          <p className="p2">Countries</p>
          <p className="p3">
            Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.
          </p>
        </div>
        <div className="proudOf__table__div bg-[white] py-[40px] px-[30px] rounded-[10px] shadow-md">
          <p className="p">98%</p>
          <p className="p2">Positive Feedback</p>
          <p className="p3">
            Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.
          </p>
        </div>
        <div className="proudOf__table__div bg-[white] py-[40px] px-[30px] rounded-[10px] shadow-md">
          <p className="p">2,558</p>
          <p className="p2">Usual users</p>
          <p className="p3">
            Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className="proudOf__anh flex justify-between items-center flex-row flex-wrap">
        <img src="anh1.jpg" alt="anh1" className="anh1" />
        <img src="a2.png" alt="anh2" className="anh2  rounded-[10px]" />
        <div className="anh3 flex flex-col items-center gap-[40px] pt-[88px] px-[41px] ">
          <p className="title1">Big love for our lovely kids.</p>
          <p className="p3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis
            nostrud exercitation.
          </p>
          <button className="button2 bg-[#E76088]">
            <span className="contactUS">CONTACT US</span>
          </button>
        </div>
      </div>
    </Proudstyle>
  );
};

export default ProudOf;
const Proudstyle = styled.div`
  .anh {
    display: flex;
  }
  .proudOf {
    &__title {
      color: var(--toy-kid-1-a-1114, #1a1114);
      text-align: center;

      font-family: Sansita;
      font-size: 54px;
      font-style: normal;
      font-weight: 700;
      line-height: 70px;
      text-transform: capitalize;

      @media (max-width: 429px) {
        font-size: 36px;
        line-height: 47px;
      }
    }
    &__table {
      background-color: white;
      display: grid;
      grid-template-columns: repeat(4, 330px);
      gap: 30px;
      justify-content: space-between;

      @media (max-width: 429px) {
        background-color: #f9fafa;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .p {
    color: var(--Toy-kid, #ec80a0);
    text-align: center;
    font-family: Sansita;
    font-size: 42px;
    font-style: normal;
    font-weight: 700;
    line-height: 55px;
    text-transform: capitalize;
  }
  .p2 {
    color: var(--toy-kid-1-a-1114, #1a1114);
    text-align: center;
    font-family: Barlow;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 31px;
  }
  .p3 {
    color: var(--Ofice-Furnitured-text, #0a1e23);
    text-align: center;
    font-family: Open Sans;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
  }
  .anh1 {
    width: 450px;
    height: 550px;
    flex-shrink: 0;
    border-radius: 20px;

    @media (max-width: 429px) {
      height: 230px;
      width: 187px;
    }
  }

  .anh2 {
    @media (max-width: 429px) {
      height: 280px;
      width: 187px;
    }
  }
  .anh3 {
    width: 450px;
    height: 550px;
    flex-shrink: 0;
    border-radius: 20px;
    background-color: #fdf4f7;
    @media (max-width: 429px) {
      height: 356px;
      width: unset;
      padding: 20px;
      margin-top: 20px;

      .title1 {
        max-width: 245px;
        text-align: center;
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: 47px;
        text-transform: capitalize;
      }
      .p3 {
        max-width: 348px;
      }
    }
  }
  .title1 {
    color: var(--toy-kid-1-a-1114, #1a1114);
    text-align: center;
    font-family: Sansita;
    font-size: 54px;
    font-style: normal;
    font-weight: 700;
    line-height: 70px;
    text-transform: capitalize;
  }
  .button2 {
    display: inline-flex;
    padding: 14px 30px;
    border-radius: 10px;
  }
  .contactUS {
    color: var(--White, #fff);
    text-align: center;
    font-family: Open Sans;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 1.7px;
    text-transform: uppercase;
  }
`;
