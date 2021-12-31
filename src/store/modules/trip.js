import Trip from "../../api/trip";

const trip = new Trip();


const TripModule = {
    namespaced: true,
    state: {
      trips: [],
      tripa: {},     
      tripsLoad: true,
      parent_id: null,
      totalTrips:0,
      oneTripLoad:false,
    },
    getters:{
        trips(state) {
            return state.trips
        },
        tripsLoad(state) {
          return state.tripsLoad;
        },
        totalTrips(state){
          return state.totalTrips;
        },
        oneTripLoad(state){
        return state.oneTripLoad;
        },
        onetrip(state){
          return Object.entries(state.trip)
                .map(([key, value]) => {
                    return { key, value };
                })
                .filter((param) => 
                param.value !== null
                );
        }
    },
    mutations:{
        SET_TRIPS(state,trips){
            state.trips=trips;
        },
        SET_TRIPS_LOAD(state,tripsLoads){
            state.tripsLoad=tripsLoads;
        },
        SET_TOTAL_TRIPS(state,total){
            state.totalTrips=total;
        }
    },
    actions:{

        //   reactivate({ commit }, id) {
        //   return new Promise((resolve, reject) => {
        //       exam
        //           .reactive(id)
        //           .then((response) => {
        //             console.log("******reactivate*******")
        //             console.log(response)
        //             console.log("******reactivate*******")
        //               resolve();
        //           })
        //           .catch((error) => {
        //               reject(error);
        //           });
        //   });
        //   },
        //   deactivate({ commit }, id) {
        //   return new Promise((resolve, reject) => {
        //       exam
        //           .deactive(id)
        //           .then((response) => {
        //               resolve();
        //           })
        //           .catch((error) => {
        //               reject(error);
        //           });
        //   });
        //   },

          getTrips({ commit }) {
            return new Promise((resolve, reject) => {
              commit("SET_TRIPS_LOAD", true);
              trip
                .list()
                .then((response) => {
                  commit("SET_TRIPS", response);
                  setTimeout(()=>{ commit("SET_TRIPS_LOAD", false);}, 2000);

                  // commit("SET_TRIPS_LOAD", false);
                  resolve();
                })
                .catch((error) => {
                  reject(error);
                });
            });
          },

        //   setExamId({commit},payload){
        //     commit("SET_EXAM_ID", payload.val);
        //   },

        //   getExam({ commit }, payload) {
        //     return new Promise((resolve, reject) => {
        //         commit("SET_EXAM_LOAD", true);
        //         commit("SET_EXAM", {});
        //         console.log(payload);
        //         exam
        //             .get(payload)
        //             .then((response) => {
        //                 commit("SET_EXAM", response.data);
        //                 console.log(response.data);
        //                 commit("SET_EXAM_LOAD", false);
        //                 resolve();
        //             })
        //             .catch((error) => {
        //                 reject(error);
        //             });
        //     });
            
        //   },
    }
    
}


export default TripModule;
