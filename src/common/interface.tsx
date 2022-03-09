export interface Film {
  title: string;
  name: string;
  poster_path: string;
  id: string;
  original_title: string;
  original_name: string;
  uid: string;
}
export interface Comment {
  id: string;
  filmId: string;
  uid: string;
  filmType: string;
  content: string;
  date: string | Date;
  listIdReply: string[];
  displayName: string;
  createdAt: number;
}
