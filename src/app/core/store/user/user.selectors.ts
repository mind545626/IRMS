import * as fromUser from './user.reducer'
import { createSelector, createFeatureSelector } from '@ngrx/store';

// for selector
export const getUserState = createFeatureSelector<fromUser.UserState>('user');

// point to users state subtree
export const getIsLogin = createSelector(getUserState, state => state.isLogin);
export const getCurrentUser = createSelector(getUserState, state => state.currentUser);