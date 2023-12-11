import React from "react";
import styled from "styled-components";
import { MdForwardToInbox } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FiHeadphones } from "react-icons/fi";

const Footer = () => {
  return (
    <Footstyle>
      <div className="flex items-center justify-between border-b-2 pb-[83px] mb-[70px] tb:flex-row flex-col">
        <h1 className="foot__title">KITO</h1>
        <div className="flex items-center  tb:flex-row flex-col">
          <p className="p1 tb:w-[206px] mr-[31px]">
            Join our list and get 20% off your first purchase!
          </p>
          <label form="email" className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <MdForwardToInbox color="#1A1114" opacity={0.7} />
            </span>
            <input
              type="text"
              id="email"
              placeholder="Enter your  email"
              className="pl-10 pr-4 py-3 border rounded-l-md "
            />
            <button className="button">
              <p className="text1">SUBSCRIBE</p>
            </button>
          </label>
        </div>
      </div>
      <div className="flex justify-between  tb:flex-row flex-col tb:p-0 p-4">
        <div className="div flex flex-col gap-4">
          <h3 className="h3">Contact info</h3>
          <div className="flex items-center gap-3">
            <CiLocationOn />
            <p className="vitri">560 King St W, Kingston, ON K7L 4V7, Canada</p>
          </div>
          <div className="flex items-center gap-3">
            <MdForwardToInbox color="#1A1114" opacity={0.7} />
            <p className="vitri">contactinfo@gmail.com</p>
          </div>
          <div className="flex items-center gap-3">
            <FiHeadphones color="#1A1114" opacity={0.7} />
            <p className="vitri">+1 212 736 3100</p>
          </div>
        </div>
        <div className="div flex flex-col gap-4">
          <h3 className="h3">Quick links</h3>
          <div className="flex items-center gap-3">
            <p className="vitri">My account</p>
          </div>
          <div className="flex items-center gap-3">
            <p className="vitri">Cart</p>
          </div>
          <div className="flex items-center gap-3">
            <p className="vitri">Wishlist</p>
          </div>
          <div className="flex items-center gap-3">
            <p className="vitri">Product Compare</p>
          </div>
        </div>
        <div className="div flex flex-col gap-4">
          <h3 className="h3">Information</h3>
          <div className="flex items-center gap-3">
           
            <p className="vitri">Privacy policy</p>
          </div>
          <div className="flex items-center gap-3">
            <p className="vitri">Refund policy</p>
          </div>
          <div className="flex items-center gap-3">
            <p className="vitri">Shipping & Return</p>
          </div>
          <div className="flex items-center gap-3">
            <p className="vitri">Term & conditions</p>
          </div>
        </div>
        <div className="div flex flex-col gap-4">
          <h3 className="h3">Follow us</h3>
          <div className="flex items-center gap-3">
          <FaFacebookF />
                      <p className="vitri">Facebook</p>
          </div>
          <div className="flex items-center gap-3">
          <IoLogoTwitter />
            <p className="vitri">Tweeter</p>
          </div>
          <div className="flex items-center gap-3">
          <RiInstagramFill />
            <p className="vitri">Instagram</p>
          </div>
          <div className="flex items-center gap-3">
          <FaYoutube />
            <p className="vitri">Youtube</p>
          </div>
        </div>
      </div>
    </Footstyle>
  );
};

export default Footer;
const Footstyle = styled.div`
  .foot {
    &__title {
      color: var(--Text---Kid-toys, #1a1114);
      font-family: Sansita;
      font-size: 54px;
      font-style: normal;
      font-weight: 800;
      line-height: 70px;
      text-transform: uppercase;
    }
  }
  .p1 {
    color: var(--toy-kid-1-a-1114, #1a1114);
    font-family: Open Sans;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
  }
  .h3 {
    color: var(--toy-kid-1-a-1114, #1a1114);
    font-family: Sansita;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 31px;
    text-transform: capitalize;
  }
  .button {
    width: 166px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 0px 10px 10px 0px;
    background: var(--Toy-kid, #ec80a0);
  }
  .text1 {
    color: var(--White, #fff);
    font-family: Open Sans;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 1.7px;
    text-transform: uppercase;
  }
  .vitri {
    color: var(--toy-kid-1-a-1114, #1a1114);
    font-family: Open Sans;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
  }
`;
