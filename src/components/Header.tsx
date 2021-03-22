import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
    }),
);
const link = { color: 'white', fontSize: "16px", textDecoration: 'none' };

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar title="Title" position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" >
                        <b><Link to="/" style={link} >NEWS-GALAXY</Link></b>&nbsp;&nbsp;
                        <Link style={link} to="/indiatab">INDIA</Link>&nbsp;
                        <Link style={link} to="/global">GLOBAL</Link>&nbsp;
                        <Link style={link} to="/livenews">LIVE NEWS</Link>&nbsp;
                        <Link style={link} to={{pathname:"/corona"}}>CORONA</Link>
                    </Typography>

                </Toolbar>
            </AppBar>
        </div>
    );
}
//   useEffect(() => {
//     fromFetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=288f7fa71b5a4781a23a59a3f82a80fa')
//       .subscribe(response =>
//         response.json().then(data => setData(data))
//       );
//   }, []);

export default Header;