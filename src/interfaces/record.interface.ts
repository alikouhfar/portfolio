export interface Record {
  id: number;
  start: number;
  end: number | null;
  title: {
    en: string;
    fa: string;
  };
  institution: {
    en: string;
    fa: string;
  };
}
