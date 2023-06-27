import { State } from "@/redux/store";

const selectFiltersModule = (state: State) => state.filters;

export const selectFilters = (state: State) => selectFiltersModule(state);
