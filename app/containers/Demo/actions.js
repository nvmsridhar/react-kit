/*
 *
 * Demo actions
 *
 */

import {
  DEFAULT_ACTION,
  DEFAULT_ACTION_SUCCESS,
  DEFAULT_ACTION_FAILURE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function defaultActionSuccess(data) {
  return {
    type: DEFAULT_ACTION_SUCCESS,
    payload: { data },
  };
}

export function defaultActionFailure(error) {
  return {
    type: DEFAULT_ACTION_FAILURE,
    payload: { error },
  };
}
