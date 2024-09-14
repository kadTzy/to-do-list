import React, { useState } from 'react'

import styled from 'styled-components'



const Appdiv = styled.div`
  padding-top:50px;
  text-align: center;
  height: 100vh;
  background-image: url('https://www.shutterstock.com/image-photo/background-image-elegant-clothing-boutique-600nw-2336662841.jpg');
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat;
  color: white; 
  align-items: center; 
  background-color: pink;
`

const Div = styled.div`
  margin-left: 400px ;
   width: 550px;
   height: 520px;
   top: 162px;
   left: 337px;
   gap: 0px;
   border-radius: 20px;
   opacity: 0px;
   border: 2px solid black;
   display: flex;
   justify-content: center;
   background: linear-gradient(181.31deg, #CAC1C1 -9.48%, rgba(143, 140, 140, 0) 115.9%);
  

`
  const Input_div = styled.div`
   margin-top: 15%;
   width: 60%;
   >input{
    padding: 15px;
    background-color: white;
    display: flex;
    align-items: center;
    margin-top: 30px;
    width: 100%;
    border-radius: 10px;
    border: 1px solid #A60AEF;
   }
   >button{
    width: 50%;
    height: 10%;
    top: 646px;
    left: 494px;
    gap: 0px;
    border-radius: 10px ;
    opacity: 0px;
    margin-top: 20px;
    background: #A60AEF;
    color:white;

   }
  `
 const H1 = styled.h1`
   font-size: 23px;
 ` 
 const Products = styled.div`
   width: 100%;
   height: 100%;
   margin-top: 95px;
   background: #C999E0;
   display: flex;
   justify-content: center;
   align-items: center;
  
 `
 const Div_content = styled.div`
  border-radius: 20px;
  width: 70%;
  max-height: 70%;
  background-color: white;
  padding: 20px;
  overflow: scroll;
  color: black;
 `
 const Img = styled.img`
  width: 100px;
  border-radius: 10px;
 `
 const Divs = styled.div`
  border-bottom: 1px solid grey;
  margin-top: 10px;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  word-wrap: break-word;
  
 `



const Project = (props) => {
  
const [inputName ,setInputName] = useState("")
const [inputPrice ,setInputPrice] = useState("")
const [inputPhoto ,setInputPhoto] = useState("")

const add_value_name = (e)=>{
   
       setInputName(e.target.value)
}
const add_value_Photo = (e)=>{
   
  setInputPhoto(e.target.value)
}
const add_value_Price = (e)=>{
   
  setInputPrice(e.target.value)
}
const [addProduct,setAddProduct] = useState(false)

  
const add_btn =(event)=>{
   event.preventDefault()
    props.Data.push({
    names:inputName,
    prices: inputPrice,
    photo:inputPhoto,
    count: 1
   })
   setAddProduct(true)
   setInputName("")
   setInputPhoto("")
   setInputPrice("")

   
}
const plus_btn = ()=>{
  
}


  return (
    <Appdiv>
    <Div >
        
        <Input_div>
        <H1>Новые товары</H1>
          <input value={inputName} placeholder='Название товара' onChange={add_value_name} type='text'/>
          <input value={inputPrice} placeholder='цена товара'onChange={add_value_Price} type='number'/>
          <input value={inputPhoto} placeholder='фото товара'onChange={add_value_Photo}/>
          <button  onClick={add_btn}>Добавить</button>
       
        </Input_div>  

    </Div>
        
     <Products>
       <Div_content>
          {addProduct?props.Data.map((el,index)=>{
            return(
              <Divs key={index}>
                <Img src={el.photo}/>
                <h1 >{el.names}</h1>
                <div>
                  <button>+</button>
                  <h3>{el.count}</h3>
                  <button >-</button>
                </div>
                <h1>{el.prices*el.count}$</h1>
              </Divs>
            )
          }):<h1>Пока нету товаров!</h1>}
       </Div_content>
     </Products>
         
    </Appdiv>
      
    
  )
}

export default Project
