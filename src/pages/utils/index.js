
export const login = async(email,password,setter) =>{
    try
    {
        const response = await fetch("http://localhost:5000/user/login",{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                
                "email":email,
                "password":password

            })
        })

        const data = await response.json();
        console.log(data.userEmail);
        setter(data.userEmail);
    }
    catch(error)
    {
        console.log(error);
    }
}

export const signUp = async(name,email,password, currentWeight, desiredWeight,age,height,sex, setter) =>{
    try
    {
        const response = await fetch("http://localhost:5000/user/signup",{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                
                "name":name,
                "email":email,
                "password":password,
                "currentWeight":currentWeight,
                "desiredWeight":desiredWeight,
                "age":age,
                "height":height,
                "sex":sex

            })
        })

        const data = await response.json();
        console.log(data.userEmail);
        setter(data.userEmail);
    }
    catch(error)
    {
        console.log(error);
    }
}