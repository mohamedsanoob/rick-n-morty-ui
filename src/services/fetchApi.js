export const apiCall = async (name = "",page=1,gender="",status="") =>{
    const api =`https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&gender=${gender}&status=${status}`
    const data = await fetch(api).then((res)=> res.json());
    
    const newData=data.results;
    return newData;
}
