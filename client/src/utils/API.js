import axios from 'axios';

const APIKey = '5fab42c911d34fdd98c8928b74a00ed5';
const BASEURL =
  'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' +
  APIKey +
  '&q=';

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query, start, end) {
    let date_query = '';
    if (start !== '') {
      date_query += '&begin_date=' + start + '0101';
    }
    if (end !== '') {
      date_query += '&end_date=' + end + '0101';
    }
    console.log(BASEURL + query + date_query);
    return axios.get(BASEURL + query + date_query);
  },
  getArticles: function() {
    return axios.get('/api/articles');
  },
  saveArticles: function(article) {
    return axios.post('/api/articles', { article });
  },
  delete: function(id) {
    return axios.post(`/api/delete/${id}`);
  }
};
