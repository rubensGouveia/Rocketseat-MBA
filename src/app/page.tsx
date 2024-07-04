import axios from "axios";
import { ITree } from "./Containers/Home/Home";
import { HomePage } from "./Containers/Home";

async function fetchRepositories(username: string, tree = "main") {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${username}/Rocketseat-MBA/git/trees/${tree}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    return [];
  }
}

async function fetchConfig(url: string) {
  try {
    const response = await axios.get(`${url}`, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3.raw",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    return [];
  }
}

async function getRepositories() {
  const username = "rubensgouveia";
  const configString = "teste.json";
  const allRepos = await fetchRepositories(username);
  const folders = allRepos.tree.filter(
    (d: ITree) => d.type === "tree" && d.path !== "github"
  );

  const foldersWithChildren = folders.map(async (folder: ITree) => {
    const repos = await fetchRepositories(username, folder.sha);
    const tree = await Promise.all(
      repos.tree.map(async (t: ITree) => {
        if (t.path === configString) {
          const config = await fetchConfig(t.url);
          return { ...t, config };
        } else {
          return t;
        }
      })
    );
    const filteredTree = tree.filter((t) => t.path !== configString);
    const configItem = tree.find((t) => t.path === configString);
    if (configItem) {
      return { ...folder, ...configItem.config, children: filteredTree };
    } else {
      return { ...folder, children: filteredTree };
    }
  });

  return Promise.all(foldersWithChildren);
}
export default async function Home() {
  const repositories = await getRepositories();
  return (
    <>
      <HomePage repositories={repositories} />
    </>
  );
}
