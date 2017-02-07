// import { mockStore } from '../utils/configure-store';
// import { ListsActions } from '../../src/actions/lists';
// //import * as fetchMock from 'fetch-mock';

// describe('Get Property List Actions', () => {
//   afterEach(() => {
//   //  fetchMock.restore();
//   });

//   it('creates GET_PROPERTIES_SUCCESS when fetching properties has been done', () => {
//     //fetchMock.post('*', { Collection: [{ Id: 1 }] });

//     const expectedActions = [
//       { type: ListsActions.GET_PROPERTIES_PENDING },
//       { type: ListsActions.GET_PROPERTIES_SUCCESS, payload: { Collection: [{ Id: 1 }] } }
//     ];
//     const store = mockStore({ properties: [] });

//     return store.dispatch(ListsActions.getProperties())
//       .then(() => {
//         chai.assert.equal(store.getActions(), expectedActions);
//       });
//   });
// });
