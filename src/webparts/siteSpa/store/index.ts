import { WebPartContext } from "@microsoft/sp-webpart-base";
import { graphfi, GraphFI, SPFx as graphSPFx } from "@pnp/graph";
import { ISPFXContext, spfi, SPFI, SPFx as spSPFx } from "@pnp/sp";
import { create } from "zustand";

import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/batching";
import "@pnp/sp";

type State = {
	context: WebPartContext | null;
	sp: SPFI | null | undefined;
	graph: GraphFI | null | undefined;
	userList: string;
	loading: boolean;
};

type Action = {
	updateContext: (context: State["context"]) => void;
	getSP: () => SPFI | null | undefined;
	updateSP: () => void;
	getGraph: () => GraphFI | null | undefined;
	updateGraph: () => void;
	updateUserList: (userList: State["userList"]) => void;
	setLoading: (loading: boolean) => void;
};

export const useZustandStore = create<State & Action>((set, get) => ({
	context: null,
	sp: null,
	graph: null,
	userList: "",
	loading: false,

	updateContext: (newContext) => set({ context: newContext }),
	getSP: () => {
		const context = get().context;
		const _sp = get().sp;
		if (context && (_sp === undefined || _sp === null)) {
			set({ sp: spfi().using(spSPFx(context as ISPFXContext)) });
		}
		return _sp;
	},
	updateSP: () => {
		const context = get().context;
		const _sp = get().sp;
		if (context && (_sp === undefined || _sp === null)) {
			set({ sp: spfi().using(spSPFx(context as ISPFXContext)) });
		}
	},
	getGraph: () => {
		const context = get().context;
		const _graph = get().graph;
		if (context && (_graph === undefined || _graph === null)) {
			set({ graph: graphfi().using(graphSPFx(context as ISPFXContext)) });
		}
		return _graph;
	},
	updateGraph: () => {
		const context = get().context;
		const _graph = get().graph;
		if (context && (_graph === undefined || _graph === null)) {
			set({ graph: graphfi().using(graphSPFx(context as ISPFXContext)) });
		}
	},

	updateUserList: (newUserList) => set({ userList: newUserList }),

	setLoading: (loading: boolean) => set({ loading }),
}));
