import { CircularProgress } from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchCoronaNews } from '../actions';
import { INITIAL_FORM_VALUES } from '../util/Constants';
import { formInputModel } from '../util/DataModel';
import BasicTable from './BasicTable';
import SearchBar from './SearchBar';
import { useState,useEffect } from 'react';

const CoronaV2 = (props: any) => {
    const [formInputValues, setFormInputValues] = useState(INITIAL_FORM_VALUES);
    useEffect(() => {
        props.fetchCoronaNews(formInputValues);
        return () => {

        }
    }, [formInputValues]);
    const handleGetInputData = (inputData:formInputModel) => {
               console.log(inputData)
               setFormInputValues(inputData)
            }
    return (
        <div>
            <SearchBar getInputData={handleGetInputData} />
            <div>
                {(props.news.fetchSuccess.length === 0) ? (
                    <div style={{ position: "relative", left: "600px", top: "400px" }}>
                        <CircularProgress value={50} />
                    </div>
                ) : (
                    <div>
                        <BasicTable tableData={props.news.fetchSuccess} />
                    </div>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    //console.log(state);
    return { news: state };
}

export default connect(mapStateToProps, { fetchCoronaNews })(CoronaV2);

