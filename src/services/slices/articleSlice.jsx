import {createSlice} from "@reduxjs/toolkit";
const articleUrls=localStorage.getItem("urls")?JSON.parse(localStorage.getItem("urls")):[];

const initialState={
    article:articleUrls,
    
}

const articleSlice=createSlice({
    name:"articles",
    initialState,
    reducers:{
        addArticle(state,action){
            const newUrl=action.payload;
            console.log("Call aayi");
                state.article.unshift({newUrl});
                localStorage.setItem("urls",JSON.stringify(state.article.map(url=>url)));
            
                   
            
                
            
            
        },
    }
});
export default articleSlice.reducer;

export const {addArticle}=articleSlice.actions;