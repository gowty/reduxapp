"use strict"

export function addToCart(book){
  return{
  type:"addToCart",
  payload:book
  }
}
