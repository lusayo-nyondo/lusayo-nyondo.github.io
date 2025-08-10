export type Project = {
  id: string;
  title: string;
  description: string;
  url?: string;
  repoUrl?: string;
  categories: string[];
  technologies: string[];
  libraries?: string[];
  highlights?: string[];
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  description?: string;
  categories: string[];
  technologies: string[];
  highlights?: string[];
  url?: string;
};

export type Publication = {
  id: string;
  type: "youtube" | "article";
  title: string;
  url: string;
  date?: string;
  platform?: string;
  brief?: string;
};

export type ResearchItem = {
  id: string;
  title: string;
  authors?: string[];
  venue?: string; // e.g., conference/journal name
  year?: number;
  status?: "preprint" | "published" | "in-review" | "thesis";
  url?: string; // canonical page
  pdfUrl?: string; // direct PDF link
  doi?: string;
  abstract?: string;
};
