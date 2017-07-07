const getInitialState = AppNavigator =>
  AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams('Home')
  );

export const reducer = Navigator => (
  state = getInitialState(Navigator),
  action
) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export const createNavReducer = AppNavigator => {
  return reducer(AppNavigator);
};
