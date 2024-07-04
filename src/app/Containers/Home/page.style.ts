import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  width: 100vw;
  background: linear-gradient(153deg, #172554 17.23%, #05053d 73.77%);
  color: #fff;
  min-height: 100vh;
`;

export const GridContainer = styled.div`
  display: grid;
  align-items: center;
  align-content: center;
  margin-inline: auto;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: repeat(3, auto);
  gap: 2rem;
  max-width: clamp(64rem, 1vw, 100vw);

  @media (max-width: 64rem) {
    padding-top: 2rem;
    padding-inline: 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  @media (max-width: 48rem) {
    align-items: center;
  }
`;
export const Header = styled.header`
  /* padding-top: 4rem; */
  width: 100%;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  gap: 1rem;
  display: grid;
  align-items: start;
  max-width: 24rem;
  @media (max-width: 48rem) {
    align-items: center;
    justify-content: center;
    text-align: center;
    & div {
      justify-content: center;
      text-align: center;
    }
    & a {
      justify-content: center;
    }
  }
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  font: 400 0.875rem/1.25 var(--font-inter);
  letter-spacing: 0.07rem;
  color: #bfdbfe;
  margin-bottom: 1rem;
`;
export const Main = styled.main`
  /* padding-top: 4rem; */
  grid-column: 2 / 3;
  grid-row: 1 / 4;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  min-height: fit-content;
  height: 100%;
  display: grid;
  align-items: start;
  align-content: flex-start;

  @media (max-width: 48rem) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h1`
  font: 700 2rem/1.25 var(--font-inter);
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.h2`
  font: 600 1.25rem / 1.25 var(--font-inter);
  color: #bfdbfe;
`;

export const Description = styled.p`
  font: 400 1rem/1.45 var(--font-inter);
  color: #dbeafe;
`;

export const Link = styled.a`
  color: #fff;
  font: 400 1rem / 1.25 var(--font-inter);

  text-decoration: underline;
  transition: all 50ms;
  display: flex;
  align-items: baseline;
  gap: 0.25rem;

  &:hover {
    color: #f2ce1b;
    text-decoration: none;
  }
`;
