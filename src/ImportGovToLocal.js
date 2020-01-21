import React, {Component} from 'react';
import { Container, TextField, Button, Typography,InputAdornment, IconButton  } from '@material-ui/core';
import Axios from 'axios';
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom'



class ImportGovToLocal extends Component {
 




    queryHandler = () => {
        Axios.get("https://data.gov.sg/api/action/datastore_search?resource_id=bdb377b8-096f-4f86-9c4f-85bad80ef93c&q=&limit=5000")
        .then(res => {
            console.log("logging response data");
            console.log(res.data)
            console.log("logging response data records");
            console.log(res.data.result.records)
            console.log("query successful")
            this.setState({
                companies : res.data.result.records
                })             
            console.log(this.state)
            var postData = []
            // For each company in the resultset, will do an individual post request to add it into local db
            // Will query for first 2000 companies in the database
            this.state.companies.map ( company => {    
                postData.push({
                    "entityName": company.entity_name,
                    "entityType": company.entity_type,
                    "issuanceAgency": company.issuance_agency_id,
                    "registeredPostalCode": company.reg_postal_code,
                    "registeredStreetName": company.reg_street_name,
                    "uenIssueDate": company.uen_issue_date,
                    "uenNumber": company.uen,
                    "uenStatus": company.uen_status
                })
                
            })
            Axios.post("http://localhost:8090/add", postData)
                .then(res => {
                    console.log(res.data)
                })    


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
                    Import Data From Government Database</Typography>


                  <Button 
                   onClick={this.queryHandler}
                   variant="contained"
                   style={{"backgroundColor": "#3868b5", "color": "white",
                   "marginLeft": "auto", "marginRight": "auto", "display": "block", "marginTop": "15px", 
                   "marginBottom": "15px"}}>Import</Button>


                <br/>


                <Link to="/">GO BACK TO NAVIGATION PAGE</Link>

            </Container>
            </div>

        )
    }








}
export default ImportGovToLocal;