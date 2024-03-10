import { Dispatch, SetStateAction } from "react"

export interface CardProps {
  id: any
  title: string
  description?: string
  timestamp?: string
  deleteButton?: boolean
  editButton?: boolean
  onClickEdit: () => void,
  onClickDelete: () => void
  setId: Dispatch<any>
  setNotesAdd: Dispatch<SetStateAction<{
    title: string;
    description: string;
}>>
}