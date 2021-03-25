import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formRoot: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }),
);
const initialvalues = {
    country:'',
    fromDate:'',
    toDate:''
    }

const SearchBar = (props: any) => {
    const classes = useStyles();
    const [inputValues, setInputValues] = useState(initialvalues);
    function handleOnClick(e:any) {
        e.preventDefault();
        props.getInputData(inputValues)
       // props.fetchCoronaNews('',inputValues);
    }
    return (
             <form className={classes.formRoot} noValidate autoComplete="off">
                <TextField id="outlined-basic" onChange={e => setInputValues({...inputValues,country: e.target.value})} label="Country" variant="outlined" />
                <TextField id="outlined-basic" onChange={e => setInputValues({...inputValues,fromDate: e.target.value})} label="From Date" variant="outlined" />
                <TextField id="outlined-basic" onChange={e => setInputValues({...inputValues,toDate: e.target.value})} label="To Date" variant="outlined" />
                <Button onClick={handleOnClick}>Search</Button>
            </form>
    )
}
export default SearchBar;