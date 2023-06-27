import { createSlice } from "@reduxjs/toolkit";
import { Filters } from "@/models/filter";

const initialState: Filters = { title: "", genre: "", cinema: "" };

interface SetFilterPayload {
  name: keyof Filters;
  item: string;
}

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter: (state: Filters, { payload }: {payload: SetFilterPayload}) => {
      state[payload.name] = payload.item;
    },
    getFilters: (state) => {
      return state;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const filtersActions = filtersSlice.actions;
