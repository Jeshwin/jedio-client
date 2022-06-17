import { ActionContext } from "vuex";
import AuthService from "../auth/auth.service";

import { User, State } from "../../types";

const user: User = JSON.parse(localStorage.getItem("user") ?? "");
const initialState: State = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login(context: ActionContext<State, Record<string, unknown>>, user: User) {
      return AuthService.login(user).then(
        (user) => {
          context.commit("loginSuccess", user);
          return Promise.resolve(user);
        },
        (error) => {
          context.commit("loginFailure");
          return Promise.reject(error);
        }
      );
    },
    logout(context: ActionContext<State, Record<string, unknown>>) {
      AuthService.logout();
      context.commit("logout");
    },
    register(
      context: ActionContext<State, Record<string, unknown>>,
      user: User
    ) {
      return AuthService.register(user).then(
        (response) => {
          context.commit("registerSuccess");
          return Promise.resolve(response.data);
        },
        (error) => {
          context.commit("registerFailure");
          return Promise.reject(error);
        }
      );
    },
    edit(context: ActionContext<State, Record<string, unknown>>, user: User) {
      return AuthService.edit(user).then(
        (user) => {
          context.commit("editSuccess", user);
          return Promise.resolve(user);
        },
        (error) => {
          context.commit("editFailure");
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    loginSuccess(state: State, user: User) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state: State) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state: State) {
      state.status.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state: State) {
      state.status.loggedIn = false;
    },
    registerFailure(state: State) {
      state.status.loggedIn = false;
    },
    editSuccess(state: State, user: User) {
      state.status.loggedIn = true;
      state.user = user;
    },
    editFailure(state: State) {
      state.status.loggedIn = true;
    },
  },
};
