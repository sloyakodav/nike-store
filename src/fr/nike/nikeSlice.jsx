import { createSlice } from "@reduxjs/toolkit";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  offer,
  shoe8,
} from "../../assets/images";
import { products, services, shoes } from "../../constants";
const initialState = {
  bigShoeImg: shoes[0].thumbnail,
  shoeData: [bigShoe1, bigShoe2, bigShoe3],
  shoes: shoes,
  products: products,
  shoe8: shoe8,
  services: services,
  offer: offer,
  darkMode: {
    darkModeData: {
      transform: "translateX(12px)",
    },
    darkModeState: false,
  },
};

const NikeSLice = createSlice({
  name: "nike",
  initialState,
  reducers: {
    changeShoeImg: (state, action) => {
      state.bigShoeImg = action.payload;
    },
    HandleDarkMode: (state, { payload }) => {
      if (state.darkMode.darkModeData.transform === "translateX(12px)") {
        state.darkMode.darkModeState = true;
        state.darkMode.darkModeData.transform = "translateX(-12px)";
      } else if (
        state.darkMode.darkModeData.transform === "translateX(-12px)"
      ) {
        state.darkMode.darkModeState = false;
        state.darkMode.darkModeData.transform = "translateX(12px)";
      }
    },
  },
});
export const { changeShoeImg, HandleDarkMode } = NikeSLice.actions;
export default NikeSLice.reducer;
