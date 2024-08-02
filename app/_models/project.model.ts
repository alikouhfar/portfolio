export interface IProject {
  id: number;
  category: string;
  tag: string;
  title: string;
  description: string;
  year: number;
  technology: string[];
  isVisible?: boolean;
}
