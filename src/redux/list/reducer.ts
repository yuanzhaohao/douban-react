const initialState = {};

export default function (state = initialState, action: any) {
  switch(action.type) {
    case 'FETCH_LIST_SUCCESS': {
      return {
        ...state,
        listData: action.payload,
      };
      break;
    }
    default:
      return state;
  }
};