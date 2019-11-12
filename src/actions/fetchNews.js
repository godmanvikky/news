export const fetchNews = () =>{
    return async (dispatch) =>{
        let apiKey = `212b3ff89c2f46dba79a92bd866e1658`;
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
        const response =await fetch(url)
        let r=await response.json()
        dispatch({
            type:"FETCH_NEWS",
            payload:r
        })
    }
}