"use strict"

import React,{Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {getBooks} from '../../actions/booksaction'

class Booklist extends Component{
  componentDidMount(){
    this.props.getBooks();
  }
  render(){
    const bookList = this.props.books.map(function(books){
      return(
        <div key={books.id}>
        <h2>{books.title}</h2>
        <h2>{books.description}</h2>
        <button type="button" className="btn btn-primary">Primary</button>
        </div>
      )
    })
    return(
      <div>
      {bookList}
      </div>
    );
  }
}

function mapStateTOProps(state){
  return {books:state.books.books}
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({getBooks:getBooks},dispatch)
}
export default connect(mapStateTOProps,mapDispatchToProps)(Booklist);
