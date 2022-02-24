const reducer = (state , action) => {
    switch(action.type){
      case 'red' : 
        return {...state , red : state.red + action.payload};
      case 'green' : 
        return {...state , green : state.green + action.payload};
      case 'blue' :
        return {...state , blue : state.blue + action.payload};
    }
}

export default reducer;