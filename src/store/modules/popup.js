export const namespaced = true;

export const state = {
  showPopup: false,
  linkFrame: null,
  showPopupMenu: false
};

export const mutations = {
  SHOW_POPUP_FRAME(state, event) {
    state.linkFrame = event;
    state.showPopup = true;
  },
  CLOSE_POPUP_FRAME(state) {
    state.showPopup = false;
  },
  SHOW_POPUP_MENU(state) {
    state.showPopupMenu = true;
  },
  CLOSE_POPUP_MENU(state) {
    state.showPopupMenu = false;
  }
};

export const actions = {
  showPopupFrame({ commit }, event) {
    commit("SHOW_POPUP_FRAME", event);
  },
  closePopupFrame({ commit }) {
    commit("CLOSE_POPUP_FRAME");
  },
  showPopupMenu({ commit }) {
    commit("SHOW_POPUP_MENU");
  },
  closePopupMenu({ commit }) {
    commit("CLOSE_POPUP_MENU");
  }
};
