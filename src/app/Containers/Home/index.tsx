"use client";
import { Card } from "@/components/Card/Card";
import { useEffect, useState } from "react";
import * as S from "./page.style";
import { Profile } from "@/components/Profile/Profile";
import axios from "axios";
import { ITree } from "./Home";
import { Footer } from "@/components/Footer/Footer";
import { RepoIcon } from "@/components/SocialIcons/Icons/repoIcon";
import { LinkIcon } from "@/components/SocialIcons/Icons/linkIcon";
import { Separator } from "@/components/Separator/Separator";

export const HomePage = ({ repositories: rep }: { repositories: ITree[] }) => {
  const cards = [
    {
      title: "Fundamentos do Desenvolvimento Web",
      projects: "EM BREVE",
      date: "27/05/2024 - 19/08/2024",
      color: "#F285C1",
      disabled: true,
    },
    {
      title: "Front-end Web",
      projects: "EM BREVE",
      date: "05/08/2024 - 27/10/2024",
      color: "#05C7F2",
      disabled: true,
    },
    {
      title: "Desenvolvimento Back-end",
      projects: "EM BREVE",
      date: "13/10/2024 - 04/01/2025",
      color: "#69BF6F",
      disabled: true,
    },
    {
      title: "Desenvolvimento Mobile",
      projects: "EM BREVE",
      date: "06/01/2025 - 29/04/2025",
      color: "#F2CE1B",
      disabled: true,
    },
    {
      title: "Soft Skills do profissional Full Stack",
      projects: "EM BREVE",
      date: "15/04/2025 - 29/06/2025",
      color: "#F26444",
      disabled: true,
    },
  ];

  const cards2 = rep?.map((repo) => {
    const projects = repo.children?.filter((r) => r.type === "tree") ?? [];
    const projectsLabel =
      projects?.length < 1
        ? "EM BREVE"
        : projects?.length > 1
        ? `${projects?.length} PROJETOS`
        : "1 PROJETO";
    return {
      title: repo?.title ?? repo.path,
      projects: projectsLabel,
      date: repo?.data,
      color: repo?.cor,
    };
  });
  return (
    <S.PageWrapper>
      <S.GridContainer>
        <S.Header>
          <S.Heading>
            <RepoIcon />
            <span>REPOSITÓRIO ACADÊMICO</span>
          </S.Heading>
          <div>
            <S.Title>Rocketseat-MBA</S.Title>
            <S.Subtitle>mai/2024 - jun/2025</S.Subtitle>
          </div>
          <S.Description>
            Projetos desenvolvidos durante a minha MBA em Dev Full Stack,
            pós-graduação da Rocketseat em parceria com a Sirius Education.
          </S.Description>
          <S.Link href="https://github.com" target="_blank">
            Ver este repositório no GitHub
            <LinkIcon />
          </S.Link>
        </S.Header>

        <S.Main>
          {cards?.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              number={(index + 1).toString().padStart(2, "0")}
              status={card.projects}
              date={card.date || "mai/2024 - jun/2025"}
              color={card.color || "#DBEAFE"}
              disabled={card.disabled}
            />
          ))}
        </S.Main>
        <Footer />
      </S.GridContainer>
    </S.PageWrapper>
  );
};
