Redux is different and React-Redux is different. Redux is a core lib React-Redux is a implementation of it for connecting the two.
Redux-ToolKit many things are done automatically.
1->Start by making a Store- generally 1 application has only 1 store- single store of truth.
    store has Reducer.
2->To make Reducer 1st we make a Slice 
    -which has a method createSlice
    -To make a slice we need 3 things- name, initialState(data structure like a array),Reducers list(can add as may key value pairs as a function)
    -These functions have 2 things- State and action (action.payload)
    -State is always preserved in redux so we can directly push the new one in the old one by 
    state.todos.push()
    -export all the Reducer
    -Main source export
3->UseDispatch() in the components to dispatch the values
4->UseSelector() to select the values