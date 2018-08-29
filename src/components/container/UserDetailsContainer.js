import React, { Component } from "react";
import UserDetails from "../presentational/UserDetails" 
import PubNubReact from "pubnub-react"

class UserDetailsContainer extends Component{
    constructor(props){
        super(props)

        this.state = {
            userDetails:[
                {name:"Abdul-Harisu Inusah",hall:"Mystic Falls",roomNumber:"0",phoneNumber:"+233241932932",service:"Cleaning"},
                {name:"Salam Yakubu",hall:"KT Hall",roomNumber:"319",phoneNumber:"+23339832983",service:"Washing"},
                {name:"Vindde Salas",hall:"CMH",roomNumber:"32",phoneNumber:"+233893289238",service:"Washing"}
            ]
        }

        this.pubnub = new PubNubReact({ subscribeKey: 'sub-c-ae1afc6e-ab22-11e8-89c5-e2f2efdc17a6' });
        this.pubnub.init(this);
    }

    async componentDidMount(){
        this.pubnub.subscribe({channels:["send:userDetails"]});

        this.pubnub.getMessage("send:userDetails", (msg) => {
            const {message} = msg

            let userDetails = this.state.userDetails.slice(0)
            userDetails.push(message)
            this.setState({userDetails})    
        });
    }

    componentWillUnmount()
    {
        this.pubnub.unsubscribe({ channels: ['send:userDetails'] });
    }



    render(){
        return(
            <div>
                <div className="container">
                    <div className="columns">
                        {this.state.userDetails.map((val,index) => {
                            return <UserDetails key={index} userName={val.name} service={val.service} roomNumber={val.roomNumber} hall={val.hall} phoneNumber={val.phoneNumber}/>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default UserDetailsContainer