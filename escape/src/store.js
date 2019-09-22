import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    serials: JSON.parse(localStorage.getItem('serials')) || [],
    serial: '',
    status: {
      "Running": "Еще снимается",
      "Ended": "Окончен",
    },
    link: "http://api.tvmaze.com/search/shows?q=iron",
  },
  mutations: {
    setSerials(state, data){
      state.serials = data;

      localStorage.setItem('serials', JSON.stringify(state.serials));
    }
  },
  actions: {
    setSerials(context, data){
      context.commit('setSerials', data);
    }
  },
  getters: {
    getLink: state => {
      return state.link;
    },
    getStatus: state => {
      return state.status;
    },
    getSerials: state => {
      return state.serials;
    },
    getSerial: state => {
      return function(id){
        for (let i=0; i < state.serials.length; i++){
          if (state.serials[i].show.id == id){
            return state.serials[i];
          }
        }
      }
    }
  }
})
