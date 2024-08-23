export interface IProjectTechnology {
  id: number;
  title: string;
  description: string;
}

export type ProjectImageType = {
  hero: string;
  [key: string]: string | undefined;
};

export interface IProject {
  id: number;
  category: string;
  tag: string;
  title: string;
  client: string;
  description: string;
  descriptionParagraphOne: string;
  descriptionParagraphTwo: string;
  year: number;
  technologies: IProjectTechnology[];
  technologiesDescription: string;
  isVisible?: boolean;
  images: ProjectImageType;
  video?: string;
  url: string;
}
