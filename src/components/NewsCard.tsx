import { makeStyles } from '@material-ui/core/styles';
import { Container, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from "@material-ui/core"
import ResponceData from '../util/DataModel';

const useStyles = makeStyles({
    containerRoot: {
        float: "left",
        marginTop: "10px",
    },
    cardRoot: {
        maxWidth: "40%",
        display: "inline-block",
        margin: "5%"
    },
    media: {
        width: '500px',
        height: '300px'
    },
});


function NewsCard(props: any) {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.containerRoot}>
            {props.news.map((headline: ResponceData) => {
                return <Card key={headline.title} className={classes.cardRoot}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={headline.title}
                            image={ headline.image? headline.image: headline.urlToImage }
                            title={headline.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {headline.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {headline.description}<br />
                                {headline.content}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button href={headline.url} size="small" color="primary">
                            Learn More
             </Button>
                    </CardActions>
                </Card>
            })}
        </Container>
    )
};

export default NewsCard;