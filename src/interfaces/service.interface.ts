export interface Service {
  id: number;
  tag: string;
  count: number;
  title: {
    en: string;
    fa: string;
  };
  body: {
    en: string;
    fa: string;
  };
}
