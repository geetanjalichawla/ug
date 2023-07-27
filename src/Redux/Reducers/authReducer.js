import { createReducer } from "@reduxjs/toolkit";
const defautState =   {
  loggedIn:false,
  user: "",
  data:{ 
      comments: {
    negative: 34,
    neutral: 12,
    positive: 134,
    remark: "Very Positive",
  },
  costumer_by_devices: {
    offline_selling: 473,
    web_sales: 1304,
  },
  performance: {
    description: "Your score is better than 80% other users",
    score: 78,
    title: "You're good!!",
  },
  revenue_cards: {
    purchase: 4355,
    refunds: 8200,
    revenue: 32220,
  }
}

}
export const authReducer = createReducer(
defautState,{
login: (state, action)=> {
    state.loggedIn = true;
},
logout: (state, action)=> {
    state.loggedIn = false;
},
setData: (state, action) => {
  const { name, value } = action.payload; // Get the name and value from the payload
  state.data[name] = value; // Update the state using the specified name and value
},

})