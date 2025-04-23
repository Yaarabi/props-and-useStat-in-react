import "./card.css"



let Category = (props) => {
        
    

    return (
        <>
        <img className="productImg" src={props.imagePth} alt="product img" />
        <div className="dscription">
            <h2>{props.name}</h2>
            <p className="desc">{props.descr}</p>
        </div>
        </>
    );
};



export default Category;
