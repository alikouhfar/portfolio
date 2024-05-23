export interface Service {
  id: number;
  tag: string;
  count: number;
  title: { [languages: string]: string };
  body: { [languages: string]: string };
}
