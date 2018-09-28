import React, { Component } from 'react';
import { InputGroup, Input } from 'reactstrap';
import '../styles/search_bar.css';
import '../styles/style.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }
  render() {
    return <div>
      <InputGroup>
        <Input placeholder="Search"
          value={this.state.term}
          onKeyUp={event => this.onKeyUp(event)}
          onChange={event => this.onInputChange(event.target.value)} />
        <span className="input-group-text cursorPointer"
          onClick={this.fireSearchTerm.bind(this)}>
          <i className="fa fa-search fa-lg"></i>
        </span>
      </InputGroup>
    </div>
  }

  fireSearchTerm() {
    this.props.onSearchTermChange(this.state.term);
  }
  onKeyUp(e) {
    if (e.keyCode === 13) {
      this.fireSearchTerm();
    }
  }

  onInputChange(term) {
    this.setState({ term });
  }
}

export default SearchBar;