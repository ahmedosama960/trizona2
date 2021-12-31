import { createStore } from "vuex";
import TripModule from "./modules/trip"
export default createStore({
  modules: {
    trip : TripModule
  },
});
