import styled from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid #fff;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h3`
  margin: 0;
  font: 700 1.25rem / 1.25 var(--font-inter);
  color: #fff;
  display: flex;
`;

export const Role = styled.p`
  text-wrap: balance;
  display: flex;
  color: #bfdbfe;
  font: 600 1rem / 1.25 var(--font-inter);
`;
