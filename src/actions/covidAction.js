import axios from "axios";


const startLoader = (dispatch,a)=>{
    return dispatch({ type: "START_LOADER" });
}
  
const stopLoader = (dispatch)=>{
    return dispatch({ type: "STOP_LOADER" });
}

export const fetchCovidCountries = () => dispatch => {
 
  startLoader(dispatch,1);
  
  axios("https://api.covid19api.com/countries").then((res) => {
    console.log(res.data);
    stopLoader(dispatch);
    if (res ) {
      dispatch({
        type: "FETCH_COVID_COUNTRIES",
        payload: {
            covidcountries : res.data
        }
      });
    }
  })
    .catch((err) => {
      console.log(err);
      var err_msg = "Something went wrong";
      if (err.response && err.response.statusText) {
        err_msg = err.response.statusText;
      }
      if(err.response && err.response.data && err.response.data.message){
        err_msg = err.response.data.message;
      }
      
      stopLoader(dispatch);
      console.log(err_msg);
    })
}

export const fetchCovidData = (data) => dispatch => {
  console.log(data.country_id);
   
    startLoader(dispatch,1);
    
    axios("https://api.covid19api.com/country/"+data.country_id).then((res) => {
    //console.log(res);
      if (res ) {
        dispatch({
          type: "FETCH_COVID_DATA",
          payload: {
              coviddata : res.data[res.data.length-1]
          }
      });
      }
      stopLoader(dispatch);
    })
      .catch((err) => {
        var err_msg = "Something went wrong";
        if (err.response && err.response.statusText) {
          err_msg = err.response.statusText;
        }
        if(err.response && err.response.data && err.response.data.message){
          err_msg = err.response.data.message;
        }
       
        stopLoader(dispatch);
        console.log(err_msg);
      })
}

