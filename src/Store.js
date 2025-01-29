import { configureStore } from "@reduxjs/toolkit";
import commerceReducer from "./CreateSlice";

export const store = configureStore({
	reducer: {
		commerce: commerceReducer,
	},
});
