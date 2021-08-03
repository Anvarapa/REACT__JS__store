import {ImgMediaCard} from "../../components/card/Card";

function Main(props) { // props = { data: [elements] }
    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {
                props.data.map((item) => (
                    <ImgMediaCard key={item.id} name={item.name} price={item.price} image={item.image} id={item.id} />
                ))
            }
        </div>
    );
}

export default Main;