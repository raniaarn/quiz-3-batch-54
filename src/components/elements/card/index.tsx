import { CardProps } from "../card/interface"

export const Card: React.FC<CardProps> = ({
  title,
  description,
  timestamp,
  editButton,
  deleteButton,
  onClickEdit,
  onClickDelete
}) => {
  return (
    <div className="w-full p-4 bg-violet-400 rounded-[20px] shadow border border-yellow-400 flex-col justify-between items-center">
      <div>
        <div className="text-white text-lg font-bold">{title}</div>
        <div className="text-white text-sm font-normal">{description}</div>
        <div className="text-white text-xs font-normal">{timestamp}</div>
      </div>
      <div className="flex justify-between w-full pt-4">
        {editButton && (
          <button className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2" onClick={onClickEdit}>Edit</button>
        )}
        {deleteButton && (
          <button className="bg-red-500 text-white px-3 py-1 rounded-md" onClick={onClickDelete}>Delete</button>
        )}
      </div>
    </div>
  )
}
