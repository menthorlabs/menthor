import { useMagicKeys, whenever } from "@vueuse/core";
export function useSearchShortcuts() {
  const searchModalStore = useSearchModalStore();

  const { ctrl_k } = useMagicKeys({
    passive: false,
    onEventFired(e) {
      if (e.ctrlKey && e.key === "k" && e.type === "keydown")
        e.preventDefault();
    },
  });

  whenever(ctrl_k, () => (searchModalStore.opened = true));
}
