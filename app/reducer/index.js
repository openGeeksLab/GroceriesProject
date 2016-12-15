import uuid from 'uuid';

module.exports = (state, action) => {
  switch(action.type) {
    case 'ADD_LIST':

      var newLists = [
        ...state.newlists,
        {
          text: action.text,
          id: uuid.v4()
        }
      ];
      return {
        newlists: newLists
      }
    default:
      return state;
  }
}
