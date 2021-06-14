export const CHANGE_FILTER = 'CHANGE_FILTER';

const initialState = 'All';

const filterReducer = (state = initialState, action) => {
  if (action.type === CHANGE_FILTER) {
    return action.filter;
  }
  return state;
};

export default filterReducer;
