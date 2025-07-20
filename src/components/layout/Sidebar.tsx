import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useMenuStore } from "../../stores/menuStore";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuGroups = useMenuStore((state) => state.getMenuGroupsWithMenus());

  const renderLinks = () => (
    <div className="flex flex-col space-y-4">
      {menuGroups.map((group) => (
        <div key={group.id}>
          {/* Jika group tidak punya menu, jadikan link */}
          {group.menus.length === 0 ? (
            <Link
              to={group.path || "/"}
              className="font-bold text-sm text-gray-800 hover:underline"
              onClick={() => setIsOpen(false)}
            >
              {group.name}
            </Link>
          ) : (
            <>
              <div className="font-bold text-sm mb-1">{group.name}</div>
              <div className="ml-2 flex flex-col space-y-1">
                {group.menus.map((menu) => (
                  <Link
                    key={menu.id}
                    to={menu.path}
                    className="text-sm text-gray-700 hover:underline"
                    onClick={() => setIsOpen(false)}
                  >
                    {menu.name}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* Sidebar untuk layar besar */}
      <aside className="hidden md:flex flex-col w-64 bg-gray-100 h-full p-4">
        {renderLinks()}
      </aside>

      {/* Sidebar responsif untuk layar kecil */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 focus:outline-none"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {isOpen && (
          <div className="absolute z-50 top-0 left-0 w-64 h-screen bg-gray-100 shadow-lg p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="mb-4 focus:outline-none"
            >
              <X />
            </button>
            {renderLinks()}
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
