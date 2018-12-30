import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class AboutUs extends React.Component { 
    constructor(prpos){
        super(prpos)
    }

    // getting all data from store from home component
    componentDidMount = () =>{
        console.log("getting all data from store from home component---",this.props.allData);
        
    }
    
    render = () => {
        return(
            <div>
                AboutUs
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        allData:state.allData
    }
};

export default connect(mapStateToProps)(AboutUs);