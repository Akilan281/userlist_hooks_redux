import React from "react"
import AddUserComponent from "./components/AddUserComponent"
import ListComponent from "./components/ListComponent"
import "./styles/userlistcomponent.css"

function UserListComponent() {
    return (
        <div className="head">
            <div className="header container-fluid">
                <h2>Welcome to UserList</h2>
            </div>
            <div className="body container-fluid">
                <div className="row">
                    <AddUserComponent />
                    <ListComponent />

                </div>

            </div>

        </div>
    )
}

export default UserListComponent
