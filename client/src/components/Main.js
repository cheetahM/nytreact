import React, { Component } from 'react';
import Search from './Search.js';
import Result from './Result.js';
import Saved from './Saved.js';
import API from '../utils/API.js';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      results: [],
      start: '',
      end: '',
      saved: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.saveArticle = this.saveArticle.bind(this);
    this.getArticles = this.getArticles.bind(this);
    this.delete = this.delete.bind(this);
    this.hello = this.hello.bind(this);
  }

  componentDidMount() {
    this.getArticles();
  }

  searchNYT = (query, start, end) => {
    API.search(query, start, end)
      .then(res => this.setState({ results: res.data.response.docs }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchNYT(this.state.search, this.state.start, this.state.end);
  };

  saveArticle = (index, event) => {
    event.preventDefault();
    console.log('saving article');
    API.saveArticles(this.state.results[index]).then(this.getArticles);
  };

  getArticles() {
    API.getArticles().then(res => {
      this.setState({ saved: res.data });
    });
  }

  delete(id) {
    console.log('deleting articles');
    API.delete(id).then(this.getArticles);
  }

  hello(text) {
    console.log(text);
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="text-center">
            <i className="fa fa-newspaper-o" aria-hidden="true" />New York Times
            Article Search
          </h1>
        </div>
        <Search
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <Result results={this.state.results} saveArticle={this.saveArticle} />
        <Saved delete={this.delete} savedArticles={this.state.saved} />
      </div>
    );
  }
}

export default Main;
