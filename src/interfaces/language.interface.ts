export interface Language {
  id: number;
  mastery: number;
  title: {
    [languages: string]: string;
  };
}
