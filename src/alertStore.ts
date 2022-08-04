import create from "zustand/vanilla";

export type Alert = {
  message: string;
  type: "success" | "error" | "warning";
};

type AlertStore = {
  alerts: Alert[];
  addAlert: (alert: Alert) => void;
};

const store = create<AlertStore>((set) => ({
  alerts: [],
  addAlert: (alert) =>
    set((state) => ({
      alerts: [...state.alerts, alert],
    })),
}));

export { store };
export const { getState, setState, subscribe, destroy } = store;
