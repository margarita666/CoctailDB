import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import './Filters.css'
import Checkbox from '@material-ui/core/Checkbox';

// export default function Checkboxes() {
//   const [checked, setChecked] = React.useState(true);

//   const handleChange = event => {
//     setChecked(event.target.checked);
//   };


class Filters extends React.Component{
  state = { filters: [],
            checkedFilters: [] };
  componentDidMount() {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    .then(respons => {
      this.setState({
        filters: respons.data.drinks.map(el => ({
          name: el.strCategory,
          value: true,
        })),
      }, () => {
        this.props.onFilter(this.state.filters);
      })
    })      
  }

  checkInputs = (value, name) => {
    this.setState({
      filters: this.state.filters.map(el => el.name===name ? {...el, value: value} : el)
    })
    
  }
  render() {

    return (
      <div className="filters">
        {this.state.filters && this.state.filters.map((elem, index) => (
          <div className="filters-text" key={index}>
            <Checkbox
              checked={elem.value}
              color="default"
              value={elem.name}
              inputProps={{ 'aria-label': 'checkbox with default color' }}
              onChange = {(el) => this.checkInputs(el.target.checked, el.target.value)}
            />{elem.name}
          </div>
        ))}
        <Button className="filter-button" variant="contained" color="default" onClick={() => this.props.onFilter(this.state.filters)}>Apply</Button>
      </div>
    );
  }
}

export default Filters;