export interface Price {
  id: number;
  title: {
    en: string;
    fa: string;
  };
  price: { en: string; fa: string };
  slogan: {
    en: string;
    fa: string;
  };
  features: { en: string; fa: string }[];
}
