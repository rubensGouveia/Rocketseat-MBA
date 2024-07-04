import React from "react";
import * as S from "./Card.style";
import { Separator } from "../Separator/Separator";
interface CardProps {
  title: string;
  number: string;
  status: string;
  date: string;
  color: string;
  disabled?: boolean;
}

export const Card: React.FC<CardProps> = ({
  title,
  number,
  status,
  date,
  color,
  disabled = false,
}) => {
  return (
    <S.CardWrapper disabled={disabled}>
      <S.Title>
        {title}
        <S.Number>{number}</S.Number>
      </S.Title>
      <Separator />

      <S.Status>{status}</S.Status>
      <S.Date>{date}</S.Date>
      <S.Detail className="detail" color={color} />
    </S.CardWrapper>
  );
};
