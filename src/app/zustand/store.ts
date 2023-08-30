import { create } from "zustand";

type openSidebarProps = {
  open: boolean;
  setOpen: () => void;
};

export const useOpenSidebar = create<openSidebarProps>((set) => ({
  open: false,
  setOpen: () => set((state) => ({ open: !state.open })),
}));
