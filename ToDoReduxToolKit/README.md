Redux is different and React-Redux is different. Redux is a core lib React-Redux is a implementation of it for connecting the two. <br/>
Redux-ToolKit many things are done automatically. <br/>
1->Start by making a Store- generally 1 application has only 1 store- single store of truth. <br/>
    store has Reducer. <br/>
2->To make Reducer 1st we make a Slice <br/>
    -which has a method createSlice<br/>
    -To make a slice we need 3 things- name, initialState(data structure like a array),Reducers list(can add as may key value pairs as a function)<br/>
    -These functions have 2 things- State and action (action.payload)<br/>
    -State is always preserved in redux so we can directly push the new one in the old one by 
    state.todos.push() <br/>
    -export all the Reducer <br/>
    -Main source export <br/>
3->UseDispatch() in the components to dispatch the values <br/>
4->UseSelector() to select the values <br/>