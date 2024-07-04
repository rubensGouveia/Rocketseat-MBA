import { Profile } from "../Profile/Profile";
import { Separator } from "../Separator/Separator";
import { Github } from "../SocialIcons/Icons/github";
import { Instagram } from "../SocialIcons/Icons/instagram";
import { Linkedin } from "../SocialIcons/Icons/linkedin";
import * as S from "./Footer.style";
export const Footer = () => {
  return (
    <S.Footer>
      <Profile />
      <S.Follow>
        <span>Siga-me nas redes sociais</span>
        <S.SocialLinks>
          <S.Icon href="https://github.com/rubensGouveia" target="_blank">
            <Github />
          </S.Icon>
          <S.Icon
            href="https://www.linkedin.com/in/rubens-gouveia-7394b2159/"
            target="_blank"
          >
            <Linkedin />
          </S.Icon>
          <S.Icon
            href="https://www.instagram.com/rubensgouveia/"
            target="_blank"
          >
            <Instagram />
          </S.Icon>
        </S.SocialLinks>
      </S.Follow>
    </S.Footer>
  );
};
