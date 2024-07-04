import * as S from "./Profile.style";
import Image from "next/image";
import profilePic from "../../../public/sorriso.jpg";
export const Profile = () => {
  return (
    <S.ProfileWrapper>
      <S.Avatar>
        <Image
          src={profilePic}
          alt="Imagem de Rubens Gouveia"
          width={64}
          height={64}
          style={{ borderRadius: "64%", objectFit: "cover" }}
        />{" "}
      </S.Avatar>
      <S.Info>
        <S.Name>Rubens Gouveia</S.Name>
        <S.Role>Full Stack Developer & Automation Manager</S.Role>
      </S.Info>
    </S.ProfileWrapper>
  );
};
