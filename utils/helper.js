
export const formsDynamicQuery = async (queryObj) => {
    let {  formType=/.*/, formStatus= /.*/, name= /.*/ , status = /.*/ } = queryObj
    if(name =  /.*/ ){
        const query = { formType:formType, formStatus: formStatus, status:status,  name: name } 
        return query
    }
   const query = { formType:formType, formStatus: formStatus, status:status,  name: { $regex: name, $options: "i" } }
   return query
};