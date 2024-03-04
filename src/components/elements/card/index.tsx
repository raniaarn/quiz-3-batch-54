import { CardProps } from "../card/interface"

export const Card: React.FC<CardProps> = ({
  title,
  description,
  timestamp
}) => {
  return (
    <div className="w-full p-4 bg-violet-400 rounded-[20px] shadow border border-yellow-400 flex-col justify-center items-end gap-6 inline-flex">
      <div className="self-stretch flex-col justify-start items-start gap-[18px] flex">
        <div className="text-white text-lg font-bold">{title}</div>
        <div className="text-white text-sm font-normal">{description}</div>
      </div>
      <div className="text-white text-xs font-normal">{timestamp}</div>
    </div>
  )
}