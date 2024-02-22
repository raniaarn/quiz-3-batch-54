import { Menu } from "@/components/elements/menu"
import { withAuth } from "@/components/elements/with-auth"

const beforeHeader = () => {
  return (
    <div className="p-2 bg-[#8478bf] text-white pr-4">
      <Menu></Menu>
    </div>
  );
}

export const Header = withAuth(beforeHeader);