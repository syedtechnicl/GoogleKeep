import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Main from './Main';
import Footer from './Footer';
import Delete from './Delete';
import { useState } from 'react';
const App = () => {
  
  const [n1,setn1]=useState([]);


  const Result=(main1)=>{
    setn1((old_2)=>{
     return [...old_2,main1]
    })
   }
  
const OnDelete=(id)=>{
    setn1((old_2)=>{
        return old_2.filter((curr,index)=>{
            return index !==id
            })
   })
 }


    return (
    <>
      <Header />
      <Main passnode={Result}/>
<ul>
    <li>
        {
            n1.map((mapwala,index)=>{
                return <Delete
                id={index}
                key={index}
                Firstinp1={mapwala.Firstinp1}
                Secondinp2={mapwala.Secondinp2}
                deleteitem={OnDelete}

                />

            })
        }
    </li>
</ul>

      <Footer/>
    </>
  );
};
export default App;