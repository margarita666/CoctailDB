import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Filters from './components/Filters/Filters';
import Coctails from './components/Coctails/Coctails';

class App extends React.Component{
  state = {
    filterParams: []
};

handleFilter = (filter) => {
    this.setState({filterParams: filter})
};
  
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <Filters onFilter={this.handleFilter}/>
          <Coctails filter={this.state.filterParams}/>
        </div>
      </div>
    );
  }
}

export default App;
