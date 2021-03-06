import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { useLocation, Link } from 'react-router-dom';
import Context from '../context/Context';

function CarouselCard({ index }) {
  const location = useLocation();

  const { recomendation } = useContext(Context);
  const [cardInfo, setCardInfo] = useState({});

  useEffect(() => {
    if (recomendation.length) {
      if (location.pathname.includes('drinks')) {
        setCardInfo({
          route: `/foods/${recomendation[Number(index)].idMeal}`,
          thumb: recomendation[Number(index)].strMealThumb,
          title: recomendation[Number(index)].strMeal,
          subtitle: recomendation[Number(index)].strCategory,
        });
      } else {
        setCardInfo({
          route: `/drinks/${recomendation[Number(index)].idDrink}`,
          thumb: recomendation[Number(index)].strDrinkThumb,
          title: recomendation[Number(index)].strDrink,
          subtitle: recomendation[Number(index)].strAlcoholic,
        });
      }
    }
  }, [recomendation]);

  return (
    <Link to={ cardInfo.route }>
      <Card data-testid={ `${index}-recomendation-card` }>
        <Card.Img variant="top" src={ cardInfo.thumb } />
        <Card.Body>
          <Card.Subtitle
            className="mb-2 text-muted subtitle-text"
          >
            {cardInfo.subtitle}
          </Card.Subtitle>
          <Card.Title
            className="text-danger text-center"
            data-testid={ `${index}-recomendation-title` }
          >
            {cardInfo.title}
          </Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
}

CarouselCard.propTypes = {
  index: PropTypes.string.isRequired,
};

export default CarouselCard;
