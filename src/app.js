"use strict"

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import reducers from "./reducers/index";
import {addToCart} from "./actions/cartAction";
import {postBook,deleteBook,updateBook} from "./actions/booksaction";
import logger from "redux-logger";
import {Provider} from "react-redux"

const middleware = applyMiddleware(logger);
const store =createStore(reducers,middleware);
// store.subscribe(function(){
// 	console.log("current state is", store.getState());
// })

import Booklist from "./components/pages/bookList";


ReactDOM.render(
  <Provider store={store}>
	<Booklist />
 </Provider>
	, document.getElementById('app'));

// store.dispatch(postBook()
// );

// store.dispatch(deleteBook({
// 	id:'2'
// })
// );
//
// store.dispatch(updateBook({
// 	id:'3',
// 	title:'updated'
// })
// );
//
// store.dispatch(addToCart([{id:1}]));
