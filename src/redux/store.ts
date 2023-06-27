import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {cartReducer} from './features/cart/index';
import {filtersReducer} from './features/filters/index'
import { movieApi } from "./services/movieApi";
import { Filters } from "@/models/filter";

export interface State {
    cart: Record<string, number>,
    filters: Filters
}
export const store = configureStore({
    reducer: {
        [movieApi.reducerPath]: movieApi.reducer,
        cart: cartReducer,
        filters: filtersReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([movieApi.middleware]),
});