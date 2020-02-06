import React from 'react';
import axios from 'axios';
import './Coctails.css'
import CoctailTypes from  './CoctailTypes'

class Coctails extends React.Component{
 
  render() {
    return (
      <div className="all-cocktails">
        {this.props.filter.map((item) => (
          item.value && <CoctailTypes category={item.name}/>
        ))}
    </div>
    );
  }
}

export default Coctails;