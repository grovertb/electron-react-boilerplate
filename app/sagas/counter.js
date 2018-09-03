// import { select, call, put, takeEvery } from 'redux-saga/effects'
// import counter from '../reducers/counter'

// const { types, selectors } = user

// function* getItemsForPath(action) {
//   try {
//     yield put({ type: types.FETCH_FOR_PATH_PENDING })
//     const payload = yield call(Get, action.path)
//     yield put({
//       type   : types.FETCH_FOR_PATH_FULFILLED,
//       payload: {
//         [action.path]: payload.items ? payload.items : []
//       }
//     })
//   } catch (e) {
//     const message = e.response.data.message || ''
//     yield put({ type: types.FETCH_FOR_PATH_FAILURE, error: message })
//   }
// }

// export default [
//   takeEvery(types.POST_SHIPPING_ADDRESS, postShippingAddress)
// ]
