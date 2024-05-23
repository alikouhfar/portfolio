export interface Record {
  id: number;
  start: number;
  end: number | null;
  title: { [languages: string]: string };
  institution: { [languages: string]: string };
}
