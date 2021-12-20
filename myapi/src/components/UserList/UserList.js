import React, { useEffect, useState } from "react";
import axios from "axios";
import UserItem from "../UserItem/UserItem";
import "./UserList.css";

const UserList = () => {
    const [info, setInfo] = useState([]);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(function (response) {
                setInfo(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <div className="userCard">
            {info.map((el, key) => (
                <div key={key}>
                    <UserItem info={el} />
                </div>
            ))}
        </div>
    );
};
export default UserList;
