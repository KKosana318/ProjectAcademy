import React from 'react';

import { getArticles } from './functions/news';

import ReadingPractice from './pages/reading-practice/reading-practice.component';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null
    }
  }

  componentDidMount() {
    getArticles().then(data => {
      this.setState({
        isLoading: false,
        data: data
      })
    }, error => {
      console.log(error);
    }
    )
  }

  render() {
    console.log(this.state.data);
    return (
      <h1>hi</h1>
    )
  }
}



export default App;
