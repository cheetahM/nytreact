import React, { Component } from 'react';
import DeleteBtn from '../../components/DeleteBtn';
import Jumbotron from '../../components/Jumbotron';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../../components/Grid';
import { List, ListItem } from '../../components/List';
import { Input, TextArea, FormBtn } from '../../components/Form';
import Search from '../../components/Search.js';
import Result from '../../components/Result.js';
import SavedArticles from '../../components/Saved.js';

class Articles extends Component {
  state = {
    results: [],
    search: '',
    start: '',
    end: '',
    saved: []
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({
          saved: res.data
        })
      )
      .catch(err => console.log(err));
  };

  searchNYT = (query, start, end) => {
    API.search(query, start, end)
      .then(res => this.setState({ results: res.data.response.docs }))
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  saveArticle = (index, event) => {
    event.preventDefault();
    console.log('saving article', this.state.results[index]);
    API.saveArticle(this.state.results[index]).then(this.loadArticles);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchNYT(this.state.search, this.state.start, this.state.end);
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>What News Should I Read?</h1>
            </Jumbotron>
            <Search
              search={this.state.search}
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <Result
              results={this.state.results}
              saveArticle={this.saveArticle}
            />
          </Col>
          <Col size="md-6">
            <SavedArticles
              delete={this.deleteArticle}
              savedArticles={this.state.saved}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;
