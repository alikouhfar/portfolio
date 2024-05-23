export interface Price {
  id: number;
  title: { [languages: string]: string };
  price: { [languages: string]: string };
  slogan: { [languages: string]: string };
  features: { [languages: string]: string }[];
}
