// store.js
import { createStore } from 'vuex';

const store = createStore({
  state: {
    messages: '',
  },
  mutations: {
    addMessage(state, newMessage) {
      state.messages = newMessage;
    },
  },
});

export default store;
