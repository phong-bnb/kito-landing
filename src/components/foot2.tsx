import React from "react";
import styled from "styled-components";

const Footer2 = () => {
  return (
    <div className="flex w-full">
      <Footer2style className="footer w-[1460px] flex justify-center py-[27px] border-t items-center mt-[70px]">
        <p className="footer__p">Beae'stemplate © 2022. All Rights Reserved.</p>
      </Footer2style>
    </div>
  );
};
export default Footer2;
const Footer2style = styled.div`
  .footer {
    &__p {
      color: var(--toy-kid-1-a-1114, #1a1114);
      font-family: Open Sans;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 26px;
      text-align: center;
    }
  }
`;
