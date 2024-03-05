export interface CardProps {
  title: string
  description?: string
  timestamp?: string
  deleteButton?: boolean
  editButton?: boolean
  onClickEdit?: () => void,
  onClickDelete?: () => void

}