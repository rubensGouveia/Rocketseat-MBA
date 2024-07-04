import styled, { css } from "styled-components";

interface IWrapper {
  disabled: boolean;
}
export const CardWrapper = styled.div<IWrapper>`
  background-color: #fff;
  border: 2px solid transparent;
  padding: 1.5rem 3rem 1.5rem 1.5rem;
  border-radius: 0.5rem;
  display: grid;
  height: 100%;
  min-height: 10.625rem;
  gap: 1rem;
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  overflow: hidden;
  height: min-content;
  position: relative;
  ${({ disabled }) => {
    if (!disabled)
      return css`
        &:hover {
          border-color: #f2ce1b;

          .detail {
            width: 1.75rem;
          }
        }
      `;
  }}
`;

export const Title = styled.h3`
  font: 600 1.125rem / 1.3 var(--font-inter);
  margin-bottom: 10px;
  color: #05053d;
  display: flex;
  justify-content: space-between;
  text-wrap: balance;
  height: 3rem;
`;

export const Number = styled.span`
  display: inline;
  font-size: 0.9rem;

  font: 400 14px /1.3 var(--font-inter);
`;

export const Status = styled.span`
  font: 600 14px /1.25 var(--font-inter);
  color: #05053d;
`;

export const Date = styled.p`
  font-size: 0.8rem;
  color: #9ca3af;
`;
interface IDetail {
  color: string;
}
export const Detail = styled.div<IDetail>`
  width: 1.5rem;
  height: 100%;
  background-color: ${({ color }) => color};
  position: absolute;
  right: 0;
  transition: all 200ms;
`;
