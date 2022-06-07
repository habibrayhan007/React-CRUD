import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
    let nevigate = useNavigate();
    const { id } = useParams();
    //alert(id);
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    const {name, username, email, phone, website} = user;
    const onInputChane = e => {
        setUser({...user,[e.target.name]: e.target.value})
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`, user);
        nevigate("/", {replace: true});   
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    };

    useEffect (() => {
        loadUser();
    }, []);

    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4"> Edit A User</h2>
                <form onSubmit={ onSubmit }>
                    <div className="form group">
                        <input type="text" className="form-control form-control-lg" placeholder="Enter Your Name" name="name" value={name} onChange={e => onInputChane(e)}/>
                    </div>
                    <div className="form group">
                        <input type="text" className="form-control form-control-lg" placeholder="Enter Your Username" name="username" value={username} onChange={e => onInputChane(e)}/>
                    </div>
                    <div className="form group">
                        <input type="text" className="form-control form-control-lg" placeholder="Enter Your E-mail Address" name="email" value={email} onChange={e => onInputChane(e)}/>
                    </div>
                    <div className="form group">
                        <input type="text" className="form-control form-control-lg" placeholder="Enter Your Phone Number" name="phone" value={phone} onChange={e => onInputChane(e)}/>
                    </div>
                    <div className="form group">
                        <input type="text" className="form-control form-control-lg" placeholder="Enter Your Website Name" name="website" value={website} onChange={e => onInputChane(e)}/>
                    </div>
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary mt-2" type="submit">Update User</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditUser;