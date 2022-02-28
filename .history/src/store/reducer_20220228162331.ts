import * as actionTypes from "./actionTypes";

const isFetched: boolean = false;

const initialState: StoreState = {
  isFetched,
};

const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.IS_FETCHD_IMAGE_CATEGORY:
      return {
        isFetched: !isFetched,
      };
    default:
      return state;
  }
};

export default reducer;
