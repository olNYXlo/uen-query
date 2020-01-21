import React, {Component} from 'react';
import { Container, TextField, Button, Typography,InputAdornment, IconButton  } from '@material-ui/core';
import Axios from 'axios';
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom'



class GovQuery extends Component {

    constructor(){
        super();
        this.state ={
            uen : "",
            name : ""
        }
        this.handleUen = this.handleUen.bind(this);
    }

    handleUen = (inputUen) => {
        this.setState({uen : inputUen.target.value})
    }
    




    queryHandler = () => {
        console.log("logging state");
        console.log(this.state);
        
        Axios.get("https://data.gov.sg/api/action/datastore_search?resource_id=bdb377b8-096f-4f86-9c4f-85bad80ef93c&q=" + this.state.uen)
        .then(res => {
            console.log("logging response data");
            console.log(res.data)
            console.log("logging response data records");
            console.log(res.data.result.records)
            if (res.data.result.records.length != 0){
                console.log("query successful")
                 this.setState({
                    response : true,
                    name : res.data.result.records[0].entity_name
                    })
                
                
                console.log(this.state)
            }
            else{
                this.setState({
                    response : false
                })
            }

        })
    }



    render() {


        return(
            <div>
             <Container     
            component="main" 
            maxWidth="sm"
            style={{borderRadius: '5px', border: "1px solid #BDBDBD", marginTop: "60px"}}>
                <Typography  
                align="center"
                variant="h1"
                style={{ backgroundColor: '#cfe8fc', color : "blue"}}>
                    Query Page From Gov Data</Typography>

                <b><p>UEN</p></b>
                  <TextField
                   input type = "text"
                   variant="outlined"
                   margin="normal"
                   value={this.state.uen}
                   onChange={this.handleUen}
                   fullWidth
                  />


                  <Button 
                   onClick={this.queryHandler}
                   variant="contained"
                   style={{"backgroundColor": "#3868b5", "color": "white",
                   "marginLeft": "auto", "marginRight": "auto", "display": "block", "marginTop": "15px", 
                   "marginBottom": "15px"}}>Query</Button>


                <br/>
                <div>

                {!this.state.response &&
                <b><p>Entered UEN Does Not Match Any Records</p></b>}

                {this.state.response &&
                <b><p>Company Name</p></b>
                }

                {this.state.response &&
                
                <TextField
                input type = "text"
                variant="outlined"
                margin="normal"
                value={this.state.name}
                fullWidth
                InputProps={{
                    readOnly: true,
                  }}
               />
                
                }
                </div>


                <Link to="/">GO BACK TO NAVIGATION PAGE</Link>

            </Container>
            </div>

        )
    }








}
export default GovQuery;