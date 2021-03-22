import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        table: {
            minWidth: 650,
          },
    }),
);

function BasicTable (props: any) {
    const classes = useStyles();
    return(
        <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell  ><b>Country</b></TableCell>
                            <TableCell align="center"><b>State</b></TableCell>
                            <TableCell align="right"><b>Active</b></TableCell>
                            <TableCell align="right"><b>Confirmed</b></TableCell>
                            <TableCell align="right"><b>Deaths</b></TableCell>
                            <TableCell align="right"><b>Recovered</b></TableCell>
                            <TableCell align="right"><b>Date</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.tableData.map((row:any) => (
                            <TableRow key={row.ID}>
                                <TableCell component="th" scope="row">
                                    {row.Country}
                                </TableCell>
                                <TableCell align="center">{row.Province}</TableCell>
                                <TableCell align="right">{row.Active}</TableCell>
                                <TableCell align="right">{row.Confirmed}</TableCell>
                                <TableCell align="right">{row.Deaths}</TableCell>
                                <TableCell align="right">{row.Recovered}</TableCell>
                                <TableCell align="right">{row.Date.slice(0,10)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    )
};

export default BasicTable;