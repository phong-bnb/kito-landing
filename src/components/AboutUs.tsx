import React from "react";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";

const AboutUs = () => {
  return (
    <AboutUsStyle className="mt-[100px]">
      <h1 className="about-us__title">About us</h1>
      <div className="flex about-us__text mb-[70px]">
        <span className="about-us__home">Home</span>
        <span className="about-us__l">|</span>
        <span className="about-us__about">About</span>
      </div>

      <div className=" tb:grid tb:grid-cols-2 flex flex-col-reverse ">
        <div className="tb:h-[600px] bg-bluer tb:py-[112px] tb:px-[90px] py-[60px] px-[60px] items-center tb:items-start tb:gap-0 gap-7 flex flex-col">
          <button className="about-us__button py-[7px] px-[15px]">
            <span>About us</span>
          </button>
          <p className="description">
            bring exciting moments of fun while playing & learning for children.
          </p>
          <button className="about-us__button2">
            <span className="contactUS">Contact us</span>
          </button>
        </div>
        <div className="tb:h-[600px] h-[370px] tb:py-[112px] tb:px-[90px] flex chim justify-center items-center">
          <div className=" flex bg-[white] rounded-[50px] w-[90px] h-[90px] justify-center items-center">
            <FaPlay className="play" color="#EC80A0" />
          </div>
        </div>
      </div>
    </AboutUsStyle>
  );
};

export default AboutUs;

const AboutUsStyle = styled.div`
  .about-us {
    &__title {
      color: var(--toy-kid-1-a-1114, #1a1114);
      font-family: Sansita;
      font-size: 54px;
      font-style: normal;
      font-weight: 700;
      line-height: 70px;
      text-transform: capitalize;
    }
    &__button2 {
      padding: 17px 40px;
      align-items: flex-start;
      border-radius: 10px;
      background: var(--Toy-kid, #ec80a0);
    }

    &__text {
      font-family: Open Sans;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 26px; /* 173.333% */
    }

    &__home {
      color: var(--toy-kid-1-a-1114, #1a1114);
    }

    &__l {
      color: rgba(26, 17, 20, 0.2);
    }

    &__about {
      color: rgba(26, 17, 20, 0.5);
    }

    &__button {
      border-radius: 5px;
      background: rgba(236, 128, 160, 0.15);

      span {
        color: var(--Toy-kid, #ec80a0);
        text-align: center;

        font-family: Open Sans;
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        line-height: 22px;
      }
    }
  }

  .description {
    color: var(--toy-kid-1-a-1114, #1a1114);

    font-family: Sansita;
    font-size: 54px;
    font-style: normal;
    font-weight: 700;
    line-height: 70px;
    text-transform: capitalize;

    @media (max-width: 429px) {
      text-align: center;
      font-size: 30px;
      line-height: 40px;
      width: 305px;
      margin: auto;
    }
  }
  .contactUS {
    color: var(--White, #fff);
    font-family: Open Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .play {
    color: var(--Toy-kid, #ec80a0);
    font-family: FontAwesome;
    font-size: 42px;
    font-style: normal;
    font-weight: 400;
    line-height: 81px;
  }

  .chim {
    background-image: url("conchim.jpg");

    @media (max-width: 429px) {
      background-image: url("chim2.png");
      background-repeat: no-repeat;
      background-size: contain;
    }
  }

  @media (max-width: 429px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
