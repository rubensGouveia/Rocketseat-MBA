import styled from "styled-components";

export const Footer = styled.footer`
  padding: 1.5rem;
  width: 100%;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  gap: 3rem;
  border-radius: 1rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
  border: 2px solid transparent;
  position: relative;
  z-index: 10;
  transition: all 400ms;
  display: grid;
  align-items: start;
  &:before {
    content: "";
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-color: rgba(0, 0, 0, 0);
    transition: all 400ms;
    z-index: -1;
  }
  &:hover {
    background-color: rgba(191, 219, 254, 0.1);
    border: 2px solid #bfdbfe;
    z-index: 3;

    &:before {
      content: "";
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      background-color: rgba(0, 0, 0, 0.3);
      z-index: -1;
    }
  }
  @media (max-width: 48rem) {
    align-items: center;
    justify-content: center;

    & div {
      justify-content: center;
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
`;

export const Icon = styled.a`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: 0.125rem solid transparent;
  transition: all 400ms;
  cursor: pointer;

  &:hover {
    border-color: #f2ce1b;
    background-color: #1e3a8a;
  }
`;

export const Follow = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  span {
    color: #bfdbfe;
    font: 400 1rem / 1.25 var(--font-inter);
  }
  @media (max-width: 48rem) {
    span {
      text-align: center;
    }
  }
`;
