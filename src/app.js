"use strict"

import {createStore} from 'redux';

const reducer = function(state={books:[]},action){
	switch(action.type){
		case "book":
    // let books = state.books.concat(action.payload);
		return {books:[...state.books,...action.payload]}; break;

		case "deletebook":
		const booktodelete = [...state.books];
		const indextodelete = booktodelete.findIndex(
			function(book){
				return book.id === action.payload.id ;
			}
		)
		return {books:[...booktodelete.slice(0,indextodelete),...booktodelete.slice(indextodelete+1)]};
	  break;

		case "updatebook":
		const booktoupdate = [...state.books];
		const indextoupdate = booktoupdate.findIndex(
			function(book){
				return book.id === action.payload.id ;
			}
		)

const updatedbook = {...booktoupdate[indextoupdate],title:action.payload.title}

		return {books:[...booktoupdate.slice(0,indextoupdate),updatedbook,...booktoupdate.slice(indextoupdate+1)]};
		break;
	}
	return state
}

const store =createStore(reducer);

store.subscribe(function(){
	console.log("current state is", store.getState());
})

store.dispatch({type:"book",payload:
[{
	id:'1',
	title:'first'
},
{
	id:'2',
	title:'second'
},
{
	id:'3',
	title:'third'
},
{
	id:'4',
	title:'fourth'
}]
});

store.dispatch({type:"deletebook",payload:
{
	id:'2'
}
});

store.dispatch({type:"updatebook",payload:
{
	id:'3',
	title:'updated'
}
});
