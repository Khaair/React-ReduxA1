import {createStore} from 'redux'

import rootReducers from './Reducers'

const initialstate = {}

export const store = createStore(
    rootReducers,
    initialstate
)