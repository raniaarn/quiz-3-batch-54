import { Menu } from "@/components/elements/menu"
import { withAuth } from "@/components/elements/with-auth"

const beforeHeader = () => {
  return (
    <div className="p-2">
      <Menu></Menu>
    </div>
  );
}

export const Header = withAuth(beforeHeader);