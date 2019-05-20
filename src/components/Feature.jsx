import React, { Component } from 'react';
import axios from 'axios';
import Pagination from './Pagination.jsx';
import { paginate } from '../utils/paginate';

class Feature extends Component {

  constructor() {
    super();
    this.state = {
      issues: [],
      pageSize: 5,
      currentPage: 1
    };
  }

  componentDidMount() {

    axios.get('https://api.github.com/repos/facebook/react/issues')
      .then(response => {
        const issues = response.data;
        this.setState({ issues });
      })
      .catch(error =>{
        console.log('Error', error)
      });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  }

  render() {
    const { pageSize, currentPage, issues } = this.state;

    const list = paginate(issues, currentPage, pageSize);
    return (
      <div className="main-content">
        <h2>Issues</h2>
        {list.map(issue => (
           <ul key={issue.id + 2}>
             <li key={issue.id + 1}  className="list">{issue.title}</li>
             <li key={issue.id} className="list">
               {issue.body}
             </li>
           </ul>
        ))}
        <Pagination itemsCount={issues.length}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange} />
      </div>
    );
  }
}

export default Feature;
