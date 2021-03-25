import { CircularProgress } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCoronaNews } from '../actions';
import { INITIAL_FORM_VALUES } from '../util/Constants';
import { formInputModel } from '../util/DataModel';
import BasicTable from './BasicTable';
import SearchBar from './SearchBar';

class CoronaV2 extends React.Component<any> {
    state = {formInputValues:INITIAL_FORM_VALUES};
    
    componentDidMount() {
        this.props.fetchCoronaNews(INITIAL_FORM_VALUES);
    }
    handleGetInputData = (inputData:formInputModel) => {
        this.setState({formInputValues: inputData})
        this.props.fetchCoronaNews(this.state.formInputValues);
    }
    render() {
        return (
            <div>
                <SearchBar getInputData={this.handleGetInputData} />
                <div>
                    {(this.props.news.fetchSuccess.length === 0) ? (
                        <div style={{ position: "relative", left: "600px", top: "400px" }}>
                            <CircularProgress value={50} />
                        </div>
                    ) : (
                        <div>
                            <BasicTable tableData={this.props.news.fetchSuccess} />
                        </div>
                    )}
                </div>

            </div>
        )
    }
};

const mapStateToProps = (state: any) => {
    console.log(state);
    return { news: state };
}

export default connect(mapStateToProps, { fetchCoronaNews })(CoronaV2);

