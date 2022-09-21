
const fetchExcercise = async (setExcercise) =>{
    try{
        const request = await fetch(`https://wger.de/api/v2/exerciseinfo/`)
        if(!request.ok){
            throw new Error (request.statusText)
        }
        let response = await request.json()
        console.log(response)

        const NewVar = response.map((excercise)=>{
            return {
                name:excercise.name,
                description:excercise.description,
                test:"true",
            }
        })
        setExcercise(NewVar)
    }catch(error){
        console.log(`Error connecting to API, ${error}`)
    }
    
}
export{fetchExcercise}