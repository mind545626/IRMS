import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action
} from "@ngrx/store";

import { environment } from "../../../environments/environment";

import * as auth from "./auth";
import * as notify from "./notify";
import * as profile from "./profile";
import * as layout from "./layout";
import * as calendar from "./calendar";
import * as user from "./user";
import {localStorageSync} from "ngrx-store-localstorage";

export interface AppState {
  auth: auth.AuthState;
  notify: notify.NotifyState;
  profile: profile.ProfileState;
  layout: layout.LayoutState;
  calendar: calendar.CalendarState;
  user: user.UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: auth.authReducer,
  notify: notify.notifyReducer,
  profile: profile.profileReducer,
  layout: layout.layoutReducer,
  calendar: calendar.calendarReducer,
  user: user.userReducer
};

// console.log all actions
export function logger(
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
  return function(state: AppState, action: any): AppState {
    if (
      // !action.silent &&
      environment.log.store
    ) {
      // console.log("\nstate", state);
      // console.log("+ action", action);

    }

    return reducer(state, action);
  };
}

export function localStorageSyncReducer(
    reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
  return localStorageSync({keys: [
    'user'
    // 加解密還有問題 先保留寫法
    // {
    //   'user': {
    //     encrypt: state => state,
    //     decrypt: state => state
    //   }
    // }
  ], rehydrate: true})(reducer);
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger, localStorageSyncReducer]
  : [];

export const effects = [
  auth.AuthEffects,
  notify.NotifyEffects,
  profile.ProfileEffects,
  layout.LayoutEffects,
  calendar.CalendarEffects,
  user.UserEffects
];

export const services = [notify.NotifyService];
