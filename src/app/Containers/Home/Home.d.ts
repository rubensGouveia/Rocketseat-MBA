export interface ITree {
  path: string;
  mode: string;
  type: string;
  sha: string;
  url: string;
  children?: ITree[];
  title?: string;
  data?: string;
  cor?: string;
}
