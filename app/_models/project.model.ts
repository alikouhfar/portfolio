import { ITechnology } from "./technology.model";

export interface IProject {
  id: number;
  category: string;
  tag: string;
  title: string;
  description: string;
  year: number;
  technologies: ITechnology[];
  isVisible?: boolean;
}
