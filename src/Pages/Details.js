import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

function Details() {
  const [details, setDetails] = useState([])
  const {id} = useParams()
  const [activeTab, setActiveTab] = useState("instructions")

  const fetchDetails = async()=> {
    const data = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const detailData = await data.json()  
    // console.log(detailData);
    setDetails(detailData)
  }

  useEffect(()=> {
    fetchDetails()
  },[id])

  return (
    <DetailWrappper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.name} />
      </div>
      <Info>
        <Button className={activeTab === "instructions" ? "active" : null} onClick={()=> setActiveTab("instructions")}>Instructions</Button>
        <Button className={activeTab === "ingredients" ? "active" : null} onClick={()=> setActiveTab("ingredients")}>Ingredients</Button>
        {
          activeTab === "instructions" && (<div>
          <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
          <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
        </div>)
        }
        {
          activeTab === "ingredients" && (
            <ul>
          {details.extendedIngredients.map((ingredient)=> {
            return <li key={ingredient.id}>{ingredient.original}</li>
          })}
        </ul>
          )
        }
      </Info>
    </DetailWrappper>
  )
}

const DetailWrappper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display : flex;
  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  
  h2{
    margin-bottom: 2rem;
  }
  li{
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul{
    margin-top: 2rem;
  }
`
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`
const Info = styled.div`
margin-left: 10rem;
` 

export default Details
