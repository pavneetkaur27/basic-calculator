import React, { Component } from 'react';
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
// import {fetchCovidData} from '../actions/covidAction';
import DropdownComponent from './DropdownComponent';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
     }
  }


  render(){
    return (
        <div>
            <div className="covid-ui-card-contaniner">
                <DropdownComponent />
              
                <div className="row no-margin no-padding">
                  
                    <div className="col-sm-4  no-padding text-align-center card-info-section">
                        {this.props.covidPanel.coviddata ?  <div  className="card-info-title">Confirmed: {this.props.covidPanel.coviddata.Confirmed ? this.props.covidPanel.coviddata.Confirmed : null}  </div>: null}
                       
                    </div>
                    <div className="col-sm-4  no-padding text-align-center card-info-section">
                    {this.props.covidPanel.coviddata ?  <div  className="card-info-title">Recoverd: {this.props.covidPanel.coviddata.Recovered ? this.props.covidPanel.coviddata.Recovered : null}  </div>: null}
                       
                    </div>

                    <div className="col-sm-4  no-padding text-align-center card-info-section">
                      {this.props.covidPanel.coviddata ?  <div  className="card-info-title">Deaths: {this.props.covidPanel.coviddata.Deaths ? this.props.covidPanel.coviddata.Deaths : null}  </div>: null}
                       
                    </div>
                </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    covidPanel: state.covidReducer,
  }
}

const mapDispatchToProps = {};


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Dashboard));