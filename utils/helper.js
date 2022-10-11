
export const formsDynamicQuery = async (queryObj) => {
    let {  formType=/.*/, formStatus= /.*/, name= /.*/ , status = /.*/ } = queryObj
    if(name =  /.*/ ){
        const query = { formType:formType, formStatus: formStatus, status:status,  name: name } 
        return query
    }
   const query = { formType:formType, formStatus: formStatus, status:status,  name: { $regex: name, $options: "i" } }
   return query
};

export const generateFormTypesResponse = async (formTypes) => {
    let ans = []
    for(let i = 0; i < formTypes.length; i++ ){
        if(formTypes[i] === "individualAccelerated"){
            let obj = {
                code: formTypes[i],
                value: "Individual Customer Creation/Modification (Accelerated)"
            }
           ans.push(obj)

        }else if(formTypes[i] === "individualLegacy"){
            let obj = {
                code: formTypes[i],
                value: "Individual Customer Creation/Modification (Legacy)"
            }
           ans.push(obj)
        }else if(formTypes[i] === "smeAccelerated"){
           let obj = {
                code: formTypes[i],
                value: "SME Customer Creation/Modification (Accelerated)"
            }
           ans.push(obj)
        }else  if(formTypes[i] === "smeLegacy"){
            let obj = {
                code: formTypes[i],
                value: "SME Customer Creation/Modification (Legacy)"
            }
           ans.push(obj)
        }else{
            break;
        }
    }
    return ans
};