module.exports={
    addUser:{
        title:"shema za dodavanje usera",
        type:"object",
        properties:{
            name:{
                type:"string",
                isNotEmpty:"true",
                maxLength:20,
            },
            surname:{
                type:"string",
                isNotEmpty:"true",
                maxLength:20,
            },
            username:{
                type:"string",
                isNotEmpty:"true",
                maxLength:20,
                minLength:5,
            },
            email:{
                type:"string",
                isNotEmpty:"true",
                format:'email',
            },
            password:{
                type:"string",
                isNotEmpty:"true",
                maxLength:20,
                minLength:7,

            },
            role:{
                type:"number",
                maximum:2,
                minimum:1
            }
            
        }
    }
}