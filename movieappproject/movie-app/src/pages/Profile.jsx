import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    useEffect(() => {
        const loggedIn = localStorage.getItem("isLoggedIn")
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (loggedIn !== "true" || !storedUser) {
            navigate("/login");
        } else {
            setUser(storedUser);
        }

    }, [navigate])


    const handlelogout = () => {
        localStorage.setItem("IsLoggedIn", false)
        navigate("/login");
    }

    if (!user) {
        return null;
    }
    return (
        <div style={styles.container}>
            <div style={styles.box}>
                <h1>profile</h1>
                <h3>Name: {user.name}</h3>
                <h3>Email:{user.email}</h3>

                <button onClick={handlelogout} style={styles.logoutbtn}>Logout</button>


            </div>

        </div>
    )
}
const styles = {
    container: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#111"

    },

    box: {
        backgroundColor: "#222",
        padding: "30px",
        borderRadius: "10px",
        color: "#fff",
        textAlign: "center",
        width: "300px",
    },
    loggedIn: {
        marginTop: "20px",
        padding: "10px 25px",
        backgroundColor: "#ff3c3c",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        color: "#fff",
        fontWeight: "bold"
    }
}


export default Profile
