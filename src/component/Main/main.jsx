import React from "react";
import { useState } from "react";
import "./main.css";
import Category from "../card/card.jsx";


const prod = [[{
    name: 'Product 1',
    imagePth: "asset/fruit/fruit.jpg",
    descr: 'Lorem ipsum dolor sit amet consectetur.',
},
{
    name: 'Product 2',
    imagePth: "asset/fruit/pexels-luiz-m-santos-250917-760281.jpg",
    descr: 'Est vitae veritatis in voluptatibus iusto eos maxime. lorem lorem lorem',
},
{
    name: 'Product 3',
    imagePth: "asset/fruit/pexels-magda-ehlers-pexels-1300975.jpg",
    descr: 'Lorem ipsum dolor sit Vitae ipsum saepe deleniti. hhhhhh Est vitae veritatis in voluptatibus iusto eos maxime.',
},
{
  name: 'Product 4',
  imagePth: "asset/fruit/pexels-pixabay-68525.jpg",
  descr: ' ipsum saepe deleniti. Est vitae veritatis in voluptatibus iusto eos maxime.',
}
],
[{
  name: 'Product 1',
  imagePth: "asset/legum/pexels-nc-farm-bureau-mark-2255935.jpg",
  descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum saepe deleniti. Est vitae veritatis in voluptatibus iusto eos maxime.',
},
{
  name: 'Product 2',
  imagePth: "asset/legum/pexels-pixabay-219794.jpg",
  descr: 'Est vitae veritatis in voluptatibus iusto eos maxime.',
},
{
  name: 'Product 3',
  imagePth: "asset/legum/pexels-solareflares-2751755.jpg",
  descr: 'Lorem ipsum dolor sit Vitae ipsum saepe deleniti. Est vitae veritatis in voluptatibus iusto eos maxime.',
},
{
name: 'Product 4',
imagePth: "asset/legum/pexels-wendywei-1656663.jpg",
descr: 'Lorem ipsum dolor sit Vitae ipsum saepe deleniti. Est vitae veritatis in voluptatibus iusto eos maxime.',
}
],
[{
  name: 'Product 1',
  imagePth: "asset/salad/pexels-chanwalrus-1059905.jpg",
  descr: 'Lorem ipsum dolor sit amet consectetur adipisicing Est vitae veritatis in voluptatibus iusto eos maxime.',
},
{
  name: 'Product 2',
  imagePth: "asset/salad/pexels-ella-olsson-572949-1640770.jpg",
  descr: 'Est vitae veritatis in voluptatibus lorem leooo iusto eos maxime.',
},
{
  name: 'Product 3',
  imagePth: "asset/salad/pexels-heyronmar-806361.jpg",
  descr: 'dolor sit Vitae ipsum saepe deleniti. Est vitae veritatis in voluptatibus iusto eos maxime.',
},
{
name: 'Product 4',
imagePth: "asset/salad/pexels-pixabay-434258.jpg",
descr: 'Lorem ipsum dolor sit Vitae ipsum saepe deleniti.',
}
]
]

export default function Main() {

  const [content, setContant] = useState(prod[0])
  let change = (i)=>{
      setContant(prod[i]);
  }
  return (
    <>

      {content.map(ele =>(
        <div className="card">
        <Category name={ ele.name } imagePth={ ele.imagePth } descr={ ele.descr } />
        </div>
      ))}

      {/* <div className="card">
      <Category name={ content[0].name } imagePth={ content[0].imagePth } descr={ content[0].descr } />
      </div>
      <div className="card">
      <Category name={ content[1].name } imagePth={ content[1].imagePth } descr={ content[1].descr } />
      </div>
      <div className="card">
      <Category name={ content[2].name } imagePth={ content[2].imagePth } descr={ content[2].descr } />
      </div>
      <div className="card">
      <Category name={ content[3].name } imagePth={ content[3].imagePth } descr={ content[3].descr } />
      </div> */}
      <div className="btns">
          <button onClick={()=>{change(0)}}>Category 1<img src="/asset/arrow-down.png" alt="down icon" /></button>
          <button onClick={()=>{change(1)}}>Category 2<img src="/asset/arrow-down.png" alt="down icon" /></button>
          <button onClick={()=>{change(2)}}>Category 3<img src="/asset/arrow-down.png" alt="down icon" /></button>
      </div>
    </>
  );
}


