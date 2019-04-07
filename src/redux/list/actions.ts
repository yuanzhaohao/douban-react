import { getListData } from '../../lib/agent';

export function fetchListData(params: {
  type: 'showing' | 'free' | 'latest';
  start?: number;
  count?: number;
}) {
  return async function(dispatch) {
    const resp = await getListData(params);
    console.log(resp);
    if (resp && resp.subjects && resp.subjects.length) {
      dispatch({
        type: 'FETCH_LIST_SUCCESS',
        payload: resp.subjects,
      });
    } else {
      dispatch({
        type: 'FETCH_LIST_FAIL',
      });
    }
  }
}