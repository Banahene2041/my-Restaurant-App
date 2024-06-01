import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'

function Searched() {
  const {search} = useParams() 
  const [searchedRecipes, setSearchedRecipes] = useState([])

  const getSearched = async(name)=> {
    try{
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
      const recipes = await data.json() 
      setSearchedRecipes(recipes.results)

      if (!searchedRecipes) {
        return setSearchedRecipes([])
      }

    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(()=> {
    getSearched(search)
  },[search])

  if (searchedRecipes.length === 0) {
    return (
      <Grid>
        <Card>
          <h4>No "Result" matches your Searched</h4>
        </Card>
      </Grid>
    )
  }

  return (
    <div>
      <Grid>
        {
          searchedRecipes.map((item)=> {
            return <Card key={item.id}>
              <Link to={`/details/` + item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
              </Link>
            </Card>
          })
        }
      </Grid>
    </div>
  )
}


const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
grid-gap: 3rem;
`
const Card = styled.div`
  img{
    width: 100%;
    border-radius: 2rem;
  }
  a{
    text-decoration: none;
  }
  h4{
    text-align: center;
    padding: 1rem;
  }
`

export default Searched
