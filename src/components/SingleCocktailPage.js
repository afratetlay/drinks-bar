import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Pin from '../icons/pin.png'
import HomeIcon from '../icons/home-icon.png'

const SingleCocktailPage = () => {
    const [cocktail, setCocktail] = useState({});
    const params = useParams();
    const id = params.id;
    
    useEffect(() => {
        
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res) => res.json())
        .then(({ drinks }) => {
            console.log(drinks[0]);
            setCocktail(drinks[0]);
        })
        .catch((error) => console.error(error));
    }, [])

    return (

        <div className='scp-wrapper'>

            <Link to={'/'} >
                <img src={ HomeIcon } className='scp-home-icon'/>
            </Link>

            <Container>

                <Row>
                    <header className='scp-header'>
                        <div className='scp-title-wrapper'>
                            <h1>{cocktail.strDrink}</h1><small className='scp-alcoholic'>({cocktail.strAlcoholic})</small>
                        </div>
                        <div className='scp-img-wrapper'>
                            <img src={ cocktail.strDrinkThumb } alt={ cocktail.strDrink } className='scp-img' />
                            <img src={ Pin } className='scp-pin'/>
                        </div>
                    </header>

                    <main className='scp-main'>

                        <h2>Ingredients Required</h2>

                            <p>{cocktail.strIngredient1}</p>
                            <p>{cocktail.strIngredient2}</p>
                            <p>{cocktail.strIngredient3}</p>
                            <p>{cocktail.strIngredient4}</p>
                            <p>{cocktail.strIngredient5}</p>
                            <p>{cocktail.strIngredient6}</p>
                            <p>{cocktail.strIngredient7}</p>
                            <p>{cocktail.strIngredient8}</p>
                            <p>{cocktail.strIngredient9}</p>
                            <p>{cocktail.strIngredient10}</p>
                            <p>{cocktail.strIngredient11}</p>
                            <p>{cocktail.strIngredient12}</p>
                            <p>{cocktail.strIngredient13}</p>
                            <p>{cocktail.strIngredient14}</p>
                            <p>{cocktail.strIngredient15}</p>

                        <h2>Instructions</h2>
                        <p>{cocktail.strInstructions}</p>

                    </main>

                </Row>

            </Container> 

        </div>
    );
}

export default SingleCocktailPage;