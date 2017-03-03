import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index.js'
import { bindActionCreators } from 'redux'

class BookList extends Component {
  renderList () {
    return this.props.books.map((book) => {
      return <li
         key={book.title}
         onClick={() => { this.props.selectBook(book) } }
         className="list-group-item">{book.title}
        </li>
    })
  }
  render () {
    return (
      <ul>
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps (state) {
  return {
    books: state.books
  }
}

// anything returned by this will end up as props
// on the BookList container
// ex. this.props.selectBook
function mapDispatchToProps (dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// by calling connect, we promote BookList from a component
// to a container.
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
