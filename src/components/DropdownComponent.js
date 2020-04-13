import React, { Component } from 'react';
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {fetchCovidCountries,fetchCovidData} from '../actions/covidAction';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
        selected_country : 'NONE'
    }
  }

  componentDidMount(){
    this.props.fetchCovidCountries();
    
  }

  changeCountryFilter = (e) =>{
        this.setState({
            selected_country : e.target.value
        })
        this.props.fetchCovidData({country_id : e.target.value})
        var self=this;
        setInterval( function(){
          self.props.fetchCovidData({country_id : self.state.selected_country})
      }, 1000
      )  
  } 

 

  render(){
      console.log(this.props);
    return (
      <div className="row no-margin no-padding">
        <div className="col-lg-5 col-sm-5 no-margin no-padding center-all" >
            <div className="dropdown-label">Country:</div>
            <Select className="country-dropdown"
                value={this.state.selected_country}
                onChange={this.changeCountryFilter} 
                placeholder="NONE"
                inputProps={{
                    name: 'country_name',
                    id: 'country_name',
                }}
                > 
                 {!this.props.covidPanel || (!this.props.covidPanel.covidcountries ) ? null 
                    : this.props.covidPanel.covidcountries.map(country =>{
                        return (
                            <MenuItem value={country.Slug} key={country.Slug}>{country.Country}</MenuItem>
                        );
                 })}
            </Select>   
            {/* <button className="hide"></button> */}
        </div> 
                 
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      covidPanel : state.covidReducer
  }
}

const mapDispatchToProps = {fetchCovidCountries,fetchCovidData};


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Dashboard));