import React, { Component } from 'react';
import API from '../utils/API';

const Saved = props => (
  <div className="row">
    <div className="panel panel-primary">
      <div className="panel-heading">
        <strong>
          <i className="fa fa-star" /> Saved Articles
        </strong>
      </div>
      <div className="panel-body" />
      {props.savedArticles.map((result, index) => (
        <div key={result._id} className="panel panel-info">
          <div className="panel-heading">
            <a href={result.web_url}>{result.title}</a>
            <div className="btn-group pull-right">
              <button
                key={result._id}
                onClick={() => props.delete(result._id)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </div>
          </div>
          <div className="panel-body">{result.snippet}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Saved;
