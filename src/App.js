import { Container } from "react-bootstrap";
import { NavBarSection } from "./componants/navBarSection";
import Title from "./componants/Title";
import Catigory from "./componants/Catigory";
import ItemList from "./componants/ItemList";
import { items } from "./data";
import { useState } from "react";
function App() {

  const [data,setData] = useState(items);

  const distantCatigory=[ 'الكل',...new Set(items.map((i)=>i.catigory))]


  //filter by catigory
  const filterByCatigory=(cat)=>{
    if(cat === 'الكل'){
      setData(items)
    }else{
      const newArray=items.filter( item => item.catigory === cat )
      setData(newArray);
    }
  }

 //filter by search filed
 const filterBySearch=(cat)=>{
  if(cat !== ''){
    const newArray=items.filter( item => item.title.includes(cat))
    setData(newArray);
  }
}
  return (
    <div className="color-body">
      <NavBarSection filterBySearch={filterBySearch}/>

      <Container>
        <Title/>
        <Catigory distantCatigory={distantCatigory} filter={filterByCatigory}/>
        <ItemList data={data}/>
      </Container>
    </div>
  );
}

export default App;
