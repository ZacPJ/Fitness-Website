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
    weight = weight*2.2
    height = height*0.39
    let intensityCalc = 0
    switch(sex){
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
            intensityCalc = 1.55
            break;
        case "Medium Intensity":
            intensityCalc = 1.725
            break;
        default:
            intensityCalc = 1.9
            break;
    }
    let dailyCal = ((BMR*intensityCalc)/24)*(time*4)
    return dailyCal
}


    const fetchExercise = async (setExercise) =>{
    try{
        const request = await fetch(`https://wger.de/api/v2/exerciseinfo/`)
        if(!request.ok){
            throw new Error (request.statusText)
        }
        let response = await request.json()
        response = response.results.filter(langvar => langvar.language.full_name === "English")
        response.push({name:"Pushups",description:"A simple shoulder workout to build strength",category:{name:"Shoulders"}})

        const NewVar = response.map((exercise)=>{
            return {
                name:exercise.name,
                description:exercise.description,
                intensity: intensitySet(),
                area: exercise.category.name
            }
        })
        setExercise(NewVar)

    }catch(error){
        console.log(`Error connecting to API, ${error}`)
    }
    
}
const fetchExerciseName = () =>{
let exerciseNames = ""
fetchExercise(exerciseNames)
return exerciseNames
}

export{fetchExercise, calorieCount,fetchExerciseName,intensitySet}