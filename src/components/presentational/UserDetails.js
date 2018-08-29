import React from "react"
import "../../userdetail.css"
import PropTypes from "prop-types"

const UserDetails = (props) => {
    return (
        <div className="column col-4" id="user-card">
            <div className="card">
                <div className="card-header">
                    <div className="card-title h5 text-primary">{props.userName}</div>
                </div>
                <div className="card-body">
                    <span className="text-error">Service: </span> {props.service} <br />
                    <span className="text-error">Hall: </span>{props.hall} <br />
                    <span className="text-error">Phone number: </span>{props.phoneNumber} <br />
                    <span className="text-error">Room number: </span>{props.roomNumber} <br /> 
                </div>
            </div>
        </div>
    )
}

UserDetails.propTypes = {
    userName:PropTypes.string,
    service:PropTypes.string,
    hall:PropTypes.string,
    phoneNumber:PropTypes.string,
    roomNumber:PropTypes.string
}
export default UserDetails