import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'

export class PCRchart extends Component {

    

    constructor(props) {
        super();

        this.state = {
            data: {
                labels: props.testDates,
                datasets: [{
                    label: '# of PCR Tests',
                    data: props.testCounts,
                    backgroundColor: 
                        'rgba(255, 99, 132, 1)',    
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
        }
    }
    render() {
        return (
            <div>
            <Bar
            data={this.state.data}
            height={400}
            width={700}
            options={{
                maintainAspectRaioo : false,
            }}
        />
  
        </div>
        )
    }
}

export default PCRchart
