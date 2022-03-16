import React from 'react'
import {useNavigate } from 'react-router-dom'
import style from  './CardInfo.module.css'


const CardInfo = (props) => {

  // const { id } = useParams()
  const navigate = useNavigate()
  // const singleCard = data.find( (card) => card.id === parseInt(id) )



  return (

    <div className = {style.container}>
       <div onClick = { () => navigate('/gallery') }>
           Go back
       </div>
    
    </div>
  )
}

export default CardInfo



