import React from 'react'
import './styles/adduser.css'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addUsers } from '../../../../redux/actions/Action'


function AddUserComponent(props) {
    const [username, setUsername] = useState('')
    const [mobilenumber, setMobilenumber] = useState('')
    const [address, setAddress] = useState('')


    function handleuser(value, type) {
        if (type == "name") {
            setUsername(value)
        } else if (type == "mobile") {
            setMobilenumber(value)
        } else {
            setAddress(value)
        }

    }

    function Adduser() {
        var numbers = /^[0-9]+$/;
        if (username == '') {
            alert('Username should not be empty')
        } else if (mobilenumber.length != 10 || !(mobilenumber.match(numbers))) {
            alert('Please enter valid mobile number')
        } else if (address == '') {
            alert('Address should not be empty')
        } else {
            let userdetails = {
                username: username,
                mobile: mobilenumber,
                address: address
            }

            var isExist = props.userslist.find((item) => (item.username == username || item.mobile == mobilenumber))
            if (isExist) {
                alert('User Already There')
            } else {
                setUsername('')
                setMobilenumber('')
                setAddress('')
                let existUser = Object.assign([], props.userslist);
                existUser.push(userdetails);
                props.addUser(existUser);
            }
        }

    }
    return (
        <div className="col-lg-6 col-sm-12 add-user-wrap">
            <div className="container">
                <form className="form-container">
                    <div className="form-group">
                        <label >Username</label>
                        <input className="form-control" value={username} onChange={(e) => handleuser(e.target.value, 'name')}></input>
                    </div>
                    <div className="form-group">
                        <label >Mobile Number</label>
                        <input className="form-control" type="number" value={mobilenumber} onChange={(e) => handleuser(e.target.value, "mobile")}></input>
                    </div>
                    <div className="form-group">
                        <label >Address</label>
                        <textarea className="form-control" value={address} className="form-control" onChange={(e) => handleuser(e.target.value)} />
                        <br />
                    </div>
                </form>
                <button className="btn btn-success" onClick={() => Adduser()}> Add User</button>
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

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (data) => (dispatch(addUsers(data)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUserComponent)
