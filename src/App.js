import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import DetailsFoods from './pages/DetailsFoods';
import DetailsDrinks from './pages/DetailsDrinks';
import ProgressFoods from './pages/ProgressFoods';
import ProgressDrinks from './pages/ProgressDrinks';
import Explore from './pages/Explore';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';
import IngredientsFoods from './pages/IngredientsFoods';
import IngredientsDrinks from './pages/IngredientsDrinks';
import NationalitiesFoods from './pages/NationalitiesFoods';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoritesRecipes from './pages/FavoritesRecipes';
import Provider from './context/Provider';
import NotFound from './pages/NotFound';
import RecipesPage from './pages/RecipesPage';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ RecipesPage } />
        <Route exact path="/drinks" component={ RecipesPage } />
        <Route exact path="/foods/:id" component={ DetailsFoods } />
        <Route exact path="/drinks/:id" component={ DetailsDrinks } />
        <Route path="/foods/:id/in-progress" component={ ProgressFoods } />
        <Route path="/drinks/:id/in-progress" component={ ProgressDrinks } />
        <Route exact path="/explore" component={ Explore } />
        <Route exact path="/explore/foods" component={ ExploreFoods } />
        <Route exact path="/explore/drinks" component={ ExploreDrinks } />
        <Route path="/explore/foods/ingredients" component={ IngredientsFoods } />
        <Route
          path="/explore/drinks/ingredients"
          component={ IngredientsDrinks }
        />
        <Route
          path="/explore/foods/nationalities"
          component={ NationalitiesFoods }
        />
        <Route path="/profile" component={ Profile } />
        <Route path="/done-recipes" component={ DoneRecipes } />
        <Route path="/favorite-recipes" component={ FavoritesRecipes } />
        <Route component={ NotFound } />
      </Switch>
    </Provider>
  );
}

export default App;
