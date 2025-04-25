import React from "react";
import "./footer.css";

const link =[
  {
    path:"/asset/instagram (1).png",
    name:"Instagram"
  },
  {
    path:"/asset/twitter (1).png",
    name:"X"
  },
  {
    path:"/asset/email (1).png",
    name:"Email"
  }
]

const Link = (props)=>{
    
    return (<>
              <li>
                <img src={props.path} alt={props.name + "icon"}  />
                <a href="instagram">{props.name}</a>
              </li>
            </>)
}

export default function Foo(atay) {
  return (
    <>
      <section className="contact">
      <fieldset>
      <legend><h3>Contact</h3></legend>
        <ul>
          {link.map(ele=>(
            <Link path= {ele.path} name= {ele.name}/>
          ))}
          {/* <Link path= {link[0].path} name= {link[0].name}/> */}
          {/* <Link path= {link[1].path} name= {link[1].name}/>
          <Link path= {link[2].path} name= {link[2].name}/> */}
        </ul>
        </fieldset>
      </section>
      <section className="service">
        
      <fieldset>
      <legend><h3>Service</h3></legend>
        <p>
          -Lorem ipsum dolor sit amet consectetur.

        </p>
        <p>
          -Lorem ipsum dolor sit amet consectetur.
        </p>
        <p>
          -Lorem ipsum dolor sit amet consectetur.
        </p>
        </fieldset>
      </section>
    </>
  );
}
