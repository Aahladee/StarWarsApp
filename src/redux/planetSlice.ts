import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPlanets = createAsyncThunk("planets/fetchPlanets", async(searchQuery: string)=>{
    const response = await fetch('https://swapi.dev/api/planets/')
    const data = await response.json();
    return data.results
});

const planetSlice = createSlice({
    name: "planets",
    initialState: { planets: [], status: "idle" },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchPlanets.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchPlanets.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.planets = action.payload;
        })
        .addCase(fetchPlanets.rejected, (state) => {
          state.status = "failed";
        });
    },
  });
  export default planetSlice.reducer;
