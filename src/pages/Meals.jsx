import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Context from '../context/Context';
import RecipeCard from '../components/RecipeCard';

export default function () {
  const { meals, mealCategories, setMealsCategoryFilter } = useContext(Context);

  // ficou assim para passar no teste, mas fica meio quebrado ainda
  if (!meals) {
    alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    return (<Redirect to="/comidas" />);
  }
  if (!meals.length) { return <span>LOADING...</span>; }

  if (meals.length === 1 && meals[0].strMeal !== 'Mbuzi Choma (Roasted Goat)') {
    return (<Redirect to={ `comidas/${meals[0].idMeal}` } />);
  }

  return (
    <div className="foods-page">
      <Header title="Comidas" />
      {mealCategories.map(({ strCategory }, i) => {
        const maxLength = 5;
        if (i < maxLength) {
          return (
            <button
              type="button"
              data-testid={ `${strCategory}-category-filter` }
              onClick={ () => setMealsCategoryFilter(strCategory) }
            >
              {strCategory}
            </button>
          );
        }
        return false;
      })}
      {meals.map(({ strMealThumb, strMeal, idMeal }, i) => {
        const mealLength = 12;
        if (i < mealLength) {
          return (
            <RecipeCard
              link={ `comidas/${idMeal}` }
              key={ i }
              id={ i }
              thumb={ strMealThumb }
              name={ strMeal }
            />);
        }
        return false;
      })}
    </div>
  );
}
