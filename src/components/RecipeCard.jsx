import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function RecipeCard({ name, thumb, id, link }) {
  return (
    <div className="cardFoodDrinkExplore">
      <Link
        to={ link }
        className="meal"
        data-testid={ `${id}-recipe-card` }
      >
        <img width="100%" src={ thumb } alt={ name } data-testid={ `${id}-card-img` } />
        <h2 data-testid={ `${id}-card-name` }>{name}</h2>
      </Link>
    </div>
  );
}

RecipeCard.propTypes = {
  name: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
};
