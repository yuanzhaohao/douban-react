import * as axios from 'axios';

export function fetchListData(url: string) {
  return async function(dispatch) {
    const resp = axios.get(url);
    if (resp.status === 'success') {
      dispatch({ type: 'FETCH_SUCCESS', payload: resp.data });
    }
  }
}