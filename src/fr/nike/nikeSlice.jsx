import { createSlice } from "@reduxjs/toolkit";
import { bigShoe1, bigShoe2, bigShoe3 } from "../../assets/images";
import { shoes } from "../../constants";
const initialState = {
  bigShoeImg: bigShoe1,
  shoeData: [bigShoe1, bigShoe2, bigShoe3],
  shoes: shoes,
};

const NikeSLice = createSlice({
  name: "nike",
  initialState,
  reducers: {
    changeShoeImg: (state, action) => {
      console.log(action.payload);
      state.bigShoeImg = action.payload;
    },
  },
});
export const { changeShoeImg } = NikeSLice.actions;
export default NikeSLice.reducer;
