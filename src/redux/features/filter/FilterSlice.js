import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    name: "",
    department: "",
  },
};

export const FilterSlice = createSlice({
  initialState,
  name: "filter",
  reducers: {
    setFilter: (state, action) => {
      const { filterType, filterValue } = action.payload;
      state.filters[filterType] = filterValue;
    },
    clearFilters: (state) => {
      state.filters = {
        name: "",
        department: "",
      };
    },
  },
});

export const { setFilter, clearFilters } = FilterSlice.actions;

export default FilterSlice.reducer;
