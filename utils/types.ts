export type Bio = {
  id: number;
  title: string;
  content: string;
};

export type Showcase = {
  id: number;
  title: string;
  stack: string | string[];
  repo: string;
  demo?: string;
  overview: string;
};

export type NavList = {
  id: number;
  title: string;
};
