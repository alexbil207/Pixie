import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import { editorReducer } from './reducers/editor-reducer';
import { dataReducer } from './reducers/data-reducer';
import { userReducer } from './reducers/user-reducer';
import { webReducer } from './reducers/web-reducer';
import { appReducer } from './reducers/app-reducer';
import { templateReducer } from './reducers/template-reducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    appModule: appReducer,
    editorModule: editorReducer,
    dataModule: dataReducer,
    userModule: userReducer,
    webModule: webReducer,
    templateModule: templateReducer
});


export const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(ReduxThunk))); //Passing the reducer