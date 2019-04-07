import { getDetailData } from '../../lib/agent';

export function fetchDetailData(params: { subjectId: number; }) {
  return async function (dispatch) {
    const resp = await getDetailData(params);
    console.log(resp);
    if (resp) {
      dispatch({
        type: 'FETCH_DETAIL_SUCCESS',
        payload: resp,
      });
    } else {
      dispatch({
        type: 'FETCH_DETAIL_FAIL',
      });
    }
  }
}