import Card from "../../Contents/Cards/card";
import SelectCard from "../../Contents/ExampleCard/SelectCard";
import Footer from "../../Footer";
import Header from "../../Header";
import foodList from '../../../data/data'
import {useState} from 'react';

const selectMenu = [
  {
      title:'Fast food',
      type:'fastfood',
      image:'https://www.seekpng.com/png/full/89-891255_fast-food-png-food.png'
  },
  {
      title:'Sushi',
      type:'sushi',
      image:'https://www.seekpng.com/png/full/89-891255_fast-food-png-food.png'
  },
  {
      title:'Fruit',
      type:'fruit',
      image:'https://www.seekpng.com/png/full/89-891255_fast-food-png-food.png'
  },
  {
      title:'Soups',
      type:'soups',
      image:'https://www.seekpng.com/png/full/89-891255_fast-food-png-food.png'
  },
  {
      title:'Drinks',
      type:'drinks',
      image:'https://www.seekpng.com/png/full/89-891255_fast-food-png-food.png'
  },
]

let cate ='all';

export default function Menu() {


    const [state, setState] = useState(cate);

    return (
      <>
        <Header></Header>
        <SelectCard state={state} setState={setState}/>
        <Card foodList={foodList} state={state} setState={setState}/>
        <Footer/>
      </>
    )
}
  
