export interface Note {
  id: string;
  title: string;
  description: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  data: any;
}

export interface NotesApiResponse {
  success: boolean;
  data: Note[];
  message: string;
}