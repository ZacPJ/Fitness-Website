
import { writeCookie } from "../common";


export const login = async (email, password, setter) => {
    try {
        const response = await fetch("http://localhost:5000/user/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({

                "email": email,
                "password": password

            })
        })

        const data = await response.json();
        writeCookie("jwt_token", data.token, 7);
        setter(data.userEmail);
    }
    catch (error) {
        console.log(error);
    }
}


export const update = async (email, name, desiredWeight, sex, height, age, calories, currentWeight) => {
    try {
        const response = await fetch("http://localhost:5000/user/updateUserInfo", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({

                "email": email,
                "name": name,
                "desiredWeight": parseInt(desiredWeight),
                "sex": sex,
                "height": parseInt(height),
                "age": parseInt(age),
                "calories": parseInt(calories),
                "currentWeight": parseInt(currentWeight)
            })
        })

        const data = await response.json();
    }
    catch (error) {
        console.log(error);
    }
}

export const signUp = async (name, email, password, currentWeight, desiredWeight, age, height, sex, setter) => {
    try {
        const response = await fetch("http://localhost:5000/user/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({

                "name": name,
                "email": email,
                "password": password,
                "currentWeight": currentWeight,
                "desiredWeight": desiredWeight,
                "age": age,
                "height": height,
                "sex": sex

            })
        })

        const data = await response.json();
        setter(data.userEmail);
    }
    catch (error) {
        console.log(error);
    }
}


export const findUser = async (token) => {
    try {
        const response = await fetch("http://localhost:5000/user/findUser", {
            method: "GET",
            headers:
            {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        const data = await response.json();
        return data.username;
    }
    catch (error) {
        console.log(error);
    }
}
export const findUserInfo = async (token) => {
    try {
        const response = await fetch("http://localhost:5000/user/findUserInfo", {
            method: "GET",
            headers:
            {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        let data = await response.json();
        return data

    }
    catch (error) {
        console.log(error);
    }
}

export const removeUser = async (email, password) => {
    try {
        console.log("deletecalled")
        const response = await fetch("http://localhost:5000/user/remove", {
            method: "POST",
            headers:
            {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "email": email,
                "password": password,
            })
        })

        const data = await response.json();
    }
    catch (error) {
        console.log(error);
    }
}


export const listUserCals = async () => {
    try {
        const response = await fetch("http://localhost:5000/user/listUsersCals", {
            method: "GET",
            headers:
            {
                "Content-Type": "application/json",
            }
        });

        const data = await response.json();
        return data.users;
    }
    catch (error) {
        console.log(error);
    }
}