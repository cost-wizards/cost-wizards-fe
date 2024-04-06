const INITIAL_STATE = {
  showAlert: true,
};

/**
 * Map Reducer
 *
 * @param state
 * @param action
 * @returns {Object}
 */
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SHOW_ALERT":
      return {
        ...state,
        showAlert: !state.showAlert,
      };

    default:
      return state;
  }
}
