const initialState = {
  detailData: null,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case 'FETCH_DETAIL_SUCCESS': {
      return {
        ...state,
        detailData: action.payload,
      };
    }
    default:
      return state;
  }
};