import { useState, useEffect } from "react";
import UserService from "../API/UserService";

const MainPageComponent = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        UserService.getUsers().then(res => {
            setUsers(res.data)
        })
    }, [])

    return (
        <div>
            <ol>
            {
                users.map((user, index) => (
                    <li key={index}>{user.login} - {user.password} - {user.email}</li>
                ))
            }
            </ol>
        </div>
    )
}

export default MainPageComponent;