import React, { Component } from 'react';
import axios from 'axios';
import ChartData from './ChartData';

class Charts extends Component {

    constructor(props) {
      super(props);
      this.state = {
        stats: {}
      };
    }

    componentDidMount() {
      axios.get(`https://api.iextrading.com/1.0/stock/${this.props.match.params.company}/stats`)
        .then(response => {
          this.setState({stats: response.data});
        })
        .catch(error =>{
          console.log('Error', error)
        });
    }
    render() {
      var qwe = String(this.state.stats.month1ChangePercent).substr(0, 6);

      return (
        <div className="main-content">
          <ul className="group">
            <h3>Company: {this.state.stats.companyName}</h3>
            <p>week52 high: ${this.state.stats.week52high}</p>
            <p>week52 low: ${this.state.stats.week52low}</p>
            <p>Month Percent Change: {qwe}%</p>
          </ul>
          <ChartData prop={this.props.match.params.company}/>
        </div>
      );
    }
}

export default Charts;
