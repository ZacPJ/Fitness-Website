    let count = 0
    const intensitySet = () => {
        count +=1
        let intensity = ""
        switch(count){
        case 1:
            intensity = "Low Intensity"
            break
        case 2:
            intensity = "Medium Intensity"
            break
        default:
            intensity = "High Intensity"
            count = 0
            break
        }
        return intensity
    }
    
const calorieCount = (weight,height,age,intensity,time,sex) =>{
    //This will be a basic way to count the number of calories burned during the different intense excercises
    let BMR = 0
    switch(sex.lower()){
        case "male":
            BMR = 66+(6.2*weight)+(12.7*height)-(6.76*age)
            break
        case "female":
            BMR = 655.1 + (4.35*weight) + (4.7*height) - (4.7*age)
            break
        default:
            BMR = ((66+(6.2*weight)+(12.7*height)-(6.76*age))+(655.1 + (4.35*weight) + (4.7*height) - (4.7*age)))/2
            break    
    }
    switch(intensity){
        case "Low Intensity":
            break
        case "Medium Intensity":
            break
        default:
            break
            
    }
}


    const fetchExcercise = async (setExcercise) =>{
    try{
        const request = await fetch(`https://wger.de/api/v2/exerciseinfo/`)
        if(!request.ok){
            throw new Error (request.statusText)
        }
        let response = await request.json()
        response = response.results.filter(langvar => langvar.language.full_name === "English")
        response.push({name:"Pushups",description:"A simple shoulder workout to build strength"})

        const NewVar = response.map((excercise)=>{
            return {
                name:excercise.name,
                description:excercise.description,
                intensity: intensitySet()
            }
        })
        setExcercise(NewVar)
    }catch(error){
        console.log(`Error connecting to API, ${error}`)
    }
    
}
export{fetchExcercise}