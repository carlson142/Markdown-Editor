import { create } from "zustand";

// SIDEBAR
type openSidebarProps = {
  open: boolean;
  setOpen: () => void;
};

export const useOpenSidebar = create<openSidebarProps>((set) => ({
  open: false,
  setOpen: () => set((state) => ({ open: !state.open })),
}));

// ******************************************************************
// MARKDOWN

type MarkdownProps = {
  text: string;
  setText: (text: string) => void;
};

export const useMarkdown = create<MarkdownProps>((set) => ({
  text: "# Create your new markdown here!",
  setText: (text) => set({ text }),
}));
