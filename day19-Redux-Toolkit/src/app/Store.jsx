import {configureStore} from'@reduxjs/toolkit';
import counterReducer from "../features/CounterSlice";
import cartReducer from "../features/CartSlice";

 export const store = configureStore({
    reducer: {
        counter:counterReducer,
        cart:cartReducer,
    },
});