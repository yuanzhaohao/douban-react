const initialState = {};

export default function (state = initialState, action: any) {
  switch(action.type) {
    case 'FETCH_SHOWING_LIST_SUCCESS': {
      return {
        ...state,
        showingData: action.payload,
      };
      break;
    }
    default:
      return state;
  }
};