import React from 'react';

const Result = props => (
  <div className="row">
    <div className="panel panel-primary">
      <div className="panel-heading">
        <strong>
          <i className="fa fa-sticky-note" /> Results
        </strong>
      </div>
      <div className="panel-body">
        {props.results.map((result, index) => (
          <div key={index} className="panel panel-info">
            <div className="panel-heading">
              <a href={result.web_url}>{result.headline.main}</a>
              <div className="btn-group pull-right">
                <button
                  type="submit"
                  key={index}
                  onClick={props.saveArticle.bind(this, index)}
                  className="btn btn-default btn-sm"
                >
                  Save
                </button>
              </div>
            </div>
            <div className="panel-body">{result.snippet}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Result;
