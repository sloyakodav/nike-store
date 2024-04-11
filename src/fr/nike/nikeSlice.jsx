import { createSlice } from "@reduxjs/toolkit";
import { bigShoe1 } from "../../assets/images";
const initialState = { bigShoeImg: bigShoe1 };

const NikeSLice = createSlice({
  name: "nike",
  initialState,
  reducers: {},
});
export const {} = NikeSLice.actions;
export default NikeSLice.reducer;
