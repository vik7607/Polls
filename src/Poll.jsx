import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
const axios = require('axios');

class Poll extends Component {
  intervalID;

  state = {
    datas: [],
  }

  componentDidMount() {
    this.getData();
  }

  componentWillUnmount() {
    /*
      stop getData() from continuing to run even
      after unmounting this component. Notice we are calling
      'clearTimeout()` here rather than `clearInterval()` as
      in the previous example.
    */
    clearTimeout(this.intervalID);
  }

  getData = () => {
    axios.get('https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0')
      .then(response => response.data)
      .then(data => {
        console.log("resposnse are ",data.hits)
        console.log("called after 5 sec")
       this.setState({ datas: [...this.state.datas,...data.hits] });
        // call getData() again in 5 seconds
        this.intervalID = setTimeout(this.getData.bind(this), 5000);  //5000
      });
  }

  render() {
console.log("this.state.data",this.state.datas)
   const  data = {
      columns: [
        {
          label: 'title',
          field: 'title',
          sort: 'asc',
          width: 100
        },
        {
          label: 'url',
          field: 'url',
          sort: 'asc',
          width: 100
        },
        {
          label: 'created_at',
          field: 'created_at',
          sort: 'asc',
          width: 100
        },
        {
          label: 'author',
          field: 'author',
          sort: 'asc',
          width: 100
        },
        
      ],
      rows: this.state.datas
      
    };


    return (
      <div>
       Poll's 
      <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
      </div> 
    );
  }
}

export default Poll