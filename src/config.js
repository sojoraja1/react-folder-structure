export const AppConfig ={
    env:process.env.PRODUCTION,
    basename:process.env.REACT_APP_BASENAME,
    baseUrl:process.env.REACT_APP_API_URL,
    endpoints:{
        auth:{
            login:"/auth/login"
        },
        user:{
            find:"/find"
        }
    }
}