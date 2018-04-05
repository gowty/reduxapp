"use strict"

export function getBooks() {
   return{
     type:"Get_BOOKS"
   }
}

export function deleteBook(id){
  return{
    type:"deleteBook",
    payload:id
  }
}

export function updateBook(book){
  return{
    type:"updateBook",
    payload:book
  }
}
