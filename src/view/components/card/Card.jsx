import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export function ImgMediaCard(props) {
  const classes = useStyles();
    const saveCard=()=>{
        const shoose = JSON.parse(localStorage.getItem('shoose'))||[]
        console.log(shoose)
        if(shoose.includes(props.id)){
            const arr = shoose.filter((item)=>item!==props.id)
            localStorage.setItem('shoose', JSON.stringify(arr))
        }else{
            localStorage.setItem('shoose', JSON.stringify([...shoose, props.id]))
        }
    }
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={props.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.price} сом
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link to={`/detail/${props.id}`}>Подробнее</Link>
        </Button>
        <Button onClick={saveCard} size="small" color="primary">
          В Корзину
        </Button>
      </CardActions>
    </Card>
  );
}
