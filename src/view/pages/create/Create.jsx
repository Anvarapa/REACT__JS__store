import TextField from "@material-ui/core/TextField";
import css from "./create.module.css";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import Alert from "@material-ui/lab/Alert";

export function Create() {
  const [name, setName] = useState();
  const [size, setSize] = useState();
  const [price, setPrice] = useState();
  const [isRes, setIsRes] = useState(false);
  const[block, setBlock]=useState(false)

  const submit = (e) => {
    e.preventDefault();
setBlock(true)
    fetch("https://60f1203338ecdf0017b0fa4e.mockapi.io/shoose", {
      method: "POST",
      body: JSON.stringify({
        name,
        size,
        price,
      }),

    })
      .then((res) => res.json())
      .then((data) => {
        setIsRes(true)
        setTimeout(()=>{setIsRes(false); setBlock(false)},5000)
      });
      setSize('');
      setPrice('');
      setName('');
      
  };
  return (
    <form onSubmit={submit} className={css.wrapper}>
      {isRes ? (
        <Alert severity="success">
          This is a success alert — check it out!
        </Alert>
      ) : null
      
      }

      <TextField
      disabled={block}
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={css.input}
        required
        id="outlined-required"
        label="Name"
        variant="outlined"
      />
      <TextField
      disabled={block}
        value={size}
        onChange={(e) => setSize(e.target.value)}
        className={css.input}
        type={"number"}
        required
        id="outlined-required"
        label="Size"
        variant="outlined"
      />
      <TextField
      disabled={block}
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className={css.input}
        type={"number"}
        required
        id="outlined-required"
        label="Price"
        variant="outlined"
      />
      <Button type="submit" variant="outlined" color="primary">
        ОТПРАВИТЬ
      </Button>
    </form>
  );
}
