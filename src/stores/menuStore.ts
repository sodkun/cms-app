import { create } from "zustand";

export interface MenuGroup {
  id: string;
  name: string;
  path?: string; // ✅ optional path untuk group
}

export interface Menu {
  id: string;
  name: string;
  groupId: string;
  path: string;
}

interface MenuStore {
  menuGroups: MenuGroup[];
  menus: Menu[];

  addMenuGroup: (name: string) => void;
  removeMenuGroup: (id: string) => void;

  addMenu: (name: string, groupId: string) => void;
  removeMenu: (id: string) => void;

  getMenuGroupsWithMenus: () => (MenuGroup & { menus: Menu[]; fallbackPath: string })[];
}

export const useMenuStore = create<MenuStore>((set, get) => ({
  menuGroups: [
    { id: "home", name: "Dashboard", path: "/home" },
    { id: "settings", name: "Settings", path: "/settings" },
  ],
  menus: [
    { id: "menu-home", name: "Home", groupId: "home", path: "/home" },
    { id: "menu-settings", name: "Settings", groupId: "settings", path: "/settings" },
  ],

  addMenuGroup: (name) =>
    set((state) => ({
      menuGroups: [
        ...state.menuGroups,
        {
          id: `group-${Date.now()}`,
          name,
        },
      ],
    })),

  removeMenuGroup: (id) =>
    set((state) => ({
      menuGroups: state.menuGroups.filter((g) => g.id !== id),
      menus: state.menus.filter((m) => m.groupId !== id),
    })),

  addMenu: (name, groupId) =>
    set((state) => {
      const path = `/${name.toLowerCase().replace(/\s+/g, "-")}`;
      return {
        menus: [
          ...state.menus,
          {
            id: `menu-${Date.now()}`,
            name,
            groupId,
            path,
          },
        ],
      };
    }),

  removeMenu: (id) =>
    set((state) => ({
      menus: state.menus.filter((m) => m.id !== id),
    })),

  getMenuGroupsWithMenus: () => {
    const { menuGroups, menus } = get();
    return menuGroups.map((group) => {
      const groupMenus = menus.filter((menu) => menu.groupId === group.id);
      const fallbackPath = groupMenus.length > 0 ? groupMenus[0].path : `/${group.name.toLowerCase().replace(/\s+/g, "-")}`;
      return {
        ...group,
        menus: groupMenus,
        fallbackPath, // ✅ bisa dipakai di Sidebar saat klik nama group
      };
    });
  },
}));
