import base from './base'

export default base({
  namespace   : 'app',
  store       : 'counter',
  initialState: {
    counter: 0
  }
}).extend({
  types  : [ 'INCREMENT_COUNTER', 'DECREMENT_COUNTER' ],
  reducer: (state, action, { types }) => {
    switch (action.type) {
      case types.INCREMENT_COUNTER:
        return {
          ...state,
          counter: state.counter + 1
        }
      case types.DECREMENT_COUNTER:
        return {
          ...state,
          counter: state.counter - 1
        }
      default:
        return state
    }
  },
  creators: ({ types: { INCREMENT_COUNTER, DECREMENT_COUNTER } }) => ({
    increment: () => ({ type: INCREMENT_COUNTER }),
    decrement: () => ({ type: DECREMENT_COUNTER })
  }),
  selectors: () => ({})
})
