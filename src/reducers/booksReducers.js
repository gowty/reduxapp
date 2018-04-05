"use strict"

export function booksReducers(state={
	books:[{
		id:'1',
		title:'first',
		description:'o'
	},
	{
		id:'2',
		title:'second',
		description:'t'
	},
	{
		id:'3',
		title:'third',
		description:'h'
	}]},action){
	switch(action.type){
		case "GET_BOOKS":
		return {...state,books:[...state.books]}; break;

		case "deleteBook":
		const booktodelete = [...state.books];
		const indextodelete = booktodelete.findIndex(
			function(book){
				return book.id === action.payload.id ;
			}
		)
		return {books:[...booktodelete.slice(0,indextodelete),...booktodelete.slice(indextodelete+1)]};
	  break;

		case "updateBook":
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
