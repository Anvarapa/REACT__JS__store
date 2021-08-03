import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Detail() {
    const params = useParams();
    console.log(params)
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true);
    useEffect(() => {
        fetch(`https://605b21f027f0050017c063b9.mockapi.io/api/v2/shoose/${params.id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setData(data)
                setPending(false)
            })
    }, [])

    if(pending) {
        return  <div>
            ...Загрузка
          </div>
    }
    return (
        <div>
            <img src={data.image} alt=""/>
            <b>Name: </b> {data?.name}
        </div>
    );
}

export default Detail;