import '../static/index.css';

import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise';
import reduxThunk from 'redux-thunk';

import rootReducer from '../reducers';

import * as types from '../actions/ActionTypes';

import Header from './common/Header';
import NotFound from './common/NotFound';
import ListsContainer from './containers/ListsContainer'
import UpdateListContainer from './containers/UpdateListContainer';

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(reduxThunk, promise))(createStore);
const store = createStoreWithMiddleware(rootReducer);


const App = (props) => (
    <div>
        <Provider store={store}>
           <BrowserRouter>
                <div> 
                    <Header/> 
                    <Switch>
                        <Route exact path='/:id' component={UpdateListContainer} />
                        <Route exact path='/' component={ListsContainer} />
                        <Route path= "*" component={NotFound} />
                    </Switch> 
                </div> 
            </BrowserRouter>
        </Provider>
    </div>
)
export default App;
