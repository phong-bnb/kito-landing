import React from "react";
import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaTruckMoving } from "react-icons/fa";
import { RiLoopRightFill } from "react-icons/ri";

import { FaGift } from "react-icons/fa";

const OurTeam = () => {
  return (
    <OurteamStyle className="flex flex-col gap-[50px] mt-[100px]">
      <h1 className="our__title">Our team</h1>
      <div className="our__table flex gap-y-5  items-center justify-between tb:flex-row flex-col">
        <div className="div flex flex-col px-[30px] items-center gap-[16px] shadow-card">
          <div>
            <img src="av1.png" alt="avt1" className="rounded-[60px]" />
          </div>
          <p className="name">Name 01</p>
          <p className="ceo text-[#8c8889]">CEO & Founder</p>
          <p className="mota">
            Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.
          </p>
          <div className="flex gap-3 items-center ">
            <FaFacebookF />
            <IoLogoTwitter />
            <RiInstagramFill />
            <FaYoutube />
          </div>
        </div>
        <div className="div flex flex-col px-[30px] items-center gap-[16px] shadow-card">
          <div>
            <img src="av2.png" alt="avt1" className="rounded-[60px]" />
          </div>
          <p className="name">Name 01</p>
          <p className="ceo text-[#8c8889]">Personnel</p>
          <p className="mota">
            Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.
          </p>
          <div className="flex gap-3 items-center ">
            <FaFacebookF />
            <IoLogoTwitter />
            <RiInstagramFill />
            <FaYoutube />
          </div>
        </div>
        <div className="div flex flex-col px-[30px] items-center gap-[16px] shadow-card">
          <div>
            <img src="av3.png" alt="avt1" className="rounded-[60px]" />
          </div>
          <p className="name">Name 01</p>
          <p className="ceo text-[#8c8889]">Personnel</p>
          <p className="mota">
            Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.
          </p>
          <div className="flex gap-3 items-center ">
            <FaFacebookF />
            <IoLogoTwitter />
            <RiInstagramFill />
            <FaYoutube />
          </div>
        </div>
        <div className="div flex flex-col px-[30px] items-center gap-[16px] shadow-card">
          <div>
            <img src="av4.png" alt="avt1" className="rounded-[60px]" />
          </div>
          <p className="name">Name 01</p>
          <p className="ceo text-[#8c8889]">Personnel</p>
          <p className="mota">
            Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.
          </p>
          <div className="flex gap-3 items-center ">
            <FaFacebookF />
            <IoLogoTwitter />
            <RiInstagramFill />
            <FaYoutube />
          </div>
        </div>
      </div>
      <div className="tb:flex hidden justify-between px-[70px] py-[50px] border rounded-md mb-[100px]">
        <div className="flex gap-3">
          <div className="divtron flex justify-center items-center">
            <FaTruckMoving className="ping" />
          </div>
          <div>
            <p className="free">Free shipping </p>
            <p className="momo">Free shipping orders from $150</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="divtron flex justify-center items-center">
            <FaGift className="ping" />
          </div>
          <div>
            <p className="free">Free shipping </p>
            <p className="momo">Free shipping orders from $150</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="divtron flex justify-center items-center">
            <RiLoopRightFill className="ping" />
          </div>
          <div>
            <p className="free">Free shipping </p>
            <p className="momo">Free shipping orders from $150</p>
          </div>
        </div>
      </div>
    </OurteamStyle>
  );
};

export default OurTeam;
const OurteamStyle = styled.div`
  .our {
    &__title {
      color: var(--toy-kid-1-a-1114, #1a1114);
      text-align: center;
      font-family: Sansita;
      font-size: 54px;
      font-style: normal;
      font-weight: 700;
      line-height: 70px;
      text-transform: capitalize;
    }
  }
  .ping {
    color: var(--Toy-kid, #ec80a0);
  }
  .free {
    color: var(--Main, #111827);
    font-family: Sansita;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 31px;
    text-transform: capitalize;
  }
  .momo {
    color: var(--Body, #585d67);
    font-family: Open Sans;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
  }
  .divtron {
    width: 60px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 30px;
    border: 1px solid var(--Toy-kid, #ec80a0);
    background: var(--White, #fff);
  }
  .div {
    width: 330px;
    height: 390px;
    flex-shrink: 0;
    border-radius: 10px;
    background-color: white;
    padding-top: 35px;
  }
  .name {
    color: var(--toy-kid-1-a-1114, #1a1114);
    text-align: center;
    font-family: Barlow;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 31px;
  }
  .ceo {
    color: "#8c8889";
    text-align: center;
    font-family: Open Sans;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
  }
  .mota {
    color: var(--Ofice-Furnitured-text, #0a1e23);
    text-align: center;
    font-family: Open Sans;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
  }

  .shadow-card {
    box-shadow: 0px 4px 30px 0px rgba(10, 30, 35, 0.1);
  }
`;
