
import router from "@/router";

export default ()=>{
    router.replace('/login').then(()=>{
        localStorage.removeItem('userInfo')
        localStorage.removeItem('Token')
    })
}