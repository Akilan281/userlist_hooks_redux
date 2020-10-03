import React from 'react'
import { connect } from 'react-redux'

function ListComponent(props) {
    return (
        <div className="col-lg-6 col-sm-12 list-user-wrap">
            <div className="container">
                {
                    props.userslist.length != 0 ?
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">User</th>
                                    <th scope="col">Mobile</th>
                                    <th scope="col">Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.userslist.map((userItem) => {
                                    return <tr>
                                        <td>{userItem.username}</td>
                                        <td>{userItem.mobile}</td>
                                        <td>{userItem.address}</td>
                                    </tr>;
                                })}
                            </tbody>
                        </table> : null}
            </div>
        </div>
    )
}

const mapStateToProps = ({ UserReducer }) => {
    console.log("UserReducer", UserReducer)
    return {
        userslist: UserReducer.userlist
    }
}


export default connect(mapStateToProps, null)(ListComponent)
