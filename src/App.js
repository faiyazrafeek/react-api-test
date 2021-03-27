import React, { Component } from 'react'
import axios from 'axios'
import Card from './components/Card';
import './App.css'
import Navbar from './components/Navbar';
import PCRchart from './components/PCRchart';

const api = axios.create({
    baseURL: `https://hpb.health.gov.lk/api/get-current-statistical/`
})



export class App extends Component {

    state = {
        result: [],
        tests: [],
        testDates: [],
        testCounts:[]         
    }
    
    constructor() {
        super();

        api.get('/').then(res => {
            
            
            this.setState(
                {
                    result: res.data.data, 
                    tests: res.data.data.daily_pcr_testing_data,
                    testDates : res.data.data.daily_pcr_testing_data.map(test => test.date),
                    testCounts : res.data.data.daily_pcr_testing_data.map(test => parseInt(test.count))
                }
            )               
        }) 
       
       
    }

    render() {
        return (
            <>
                <Navbar/>
                <div className="container mt-5">                    
                    <div className="display-4 text-center">Local COVID-19 Cases</div>    
                    
                    <div className="local-cases">
                        <Card title="Active Cases" cases={ this.state.result.local_active_cases } icon="fa-procedures" color="bg-blue" />
                        <Card title="Deaths" cases={ this.state.result.local_deaths } icon="fa-bed" color="bg-red" />
                        <Card title="Recovered" cases={ this.state.result.local_recovered } icon="fa-running" color="bg-green" />
                        <Card title="Total Cases" cases={ this.state.result.local_total_cases } icon="fa-viruses" color="bg-orange" />
                        <Card title="Suspected Cases" cases={ this.state.result.local_total_number_of_individuals_in_hospitals } icon="fa-ambulance" color="bg-gray" />       
                    </div>

                    <div className="local-cases">
               
                       <PCRchart testDates={this.state.testDates} testCounts={this.state.testCounts} /> 
                    </div>
                </div>
            </>
        )
    }
}

export default App
