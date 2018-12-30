import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {loadAllData} from "./../actions/dataAction"

class Home extends Component {
    constructor(props){
        super(props);
    }

    // load all data in store
    componentDidMount = () =>{
        this.props.loadAllData({id:12,name:'vikask'});
    }

    render(){
        return(
            <div>
                Home
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
		allData: state.allData
	}	
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
	loadAllData
}, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);