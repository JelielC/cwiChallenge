import styled, { css } from "styled-components";

const activeClass = css`
  cursor: pointer;
  background-color: rgba(221, 226, 255, 0.08);
  color: #dde2ff;
  border-left: 2px solid #dde2ff;
`;

export const NavBarContainer = styled.div`
  width: 255px;
  background-color: #363740;
  position: fixed;
  height: 100%;
  overflow: auto;
  ul {
    margin-top: 35px;
  }
  li {
    .active{
      ${activeClass}
    }
    >a{
      display: flex;
    height: 56px;
    /* margin-left: 32px; */
    color: #a4a6b3;
    font-size: 16px;
    align-items: center;
    &:hover {
      ${activeClass}
    }
      text-decoration: none;
      color: #dde2ff;
      > div {
      margin-left: 32px;
      display: flex;
      align-items: center;
      > span {
        margin-left: 24px;
        }
      }
    }
  }
`;

export const Separator = styled.div`
    width: 100%;
        height: 1px;
        background-color: rgba(223, 224, 235, 0.08);
        margin-top: 36px;   
`;

export const DivLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 29px;
  > img {
    width: 40px;
    height: 40px;
  }
  > span {
    margin-left: 12px;
    font-weight: 700;
    font-size: 19px;
    color: #a4a6b3;
  }
`;
