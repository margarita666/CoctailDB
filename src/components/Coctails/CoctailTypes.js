import React, { Fragment } from 'react';
import axios from 'axios';

class CoctailTypes extends React.Component {
  state = {
    cocktailsList: [],
  }
  componentDidMount() {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${this.props.category}`)
            .then((res) => {
                this.setState({
                  cocktailsList: res.data.drinks
                })
            })
  }
  render() {

    return(
      <Fragment>
        <div className="coctails-type">{this.props.category}</div>
        <div className="cocktails">
          {this.state.cocktailsList.map(cocktail =>(
            <div className="cocktail">
              <img src={cocktail.strDrinkThumb} alt=""/>
              <div className='name'>{cocktail.strDrink}
              </div>
            </div>))}
        </div>
      </Fragment>
    )
  }
}

export default CoctailTypes;