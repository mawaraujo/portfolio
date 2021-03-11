//  REDUX State
const user = {
  name: ''
} 

// eslint-disable-next-line
export default (state = user, action) => {
  switch(action.type) {
    case 'SET_USERNAME_ACTION':
      return {
        ...state, 
        name: action.payload.name
      }
    
    default: 
      return state;
  }
}