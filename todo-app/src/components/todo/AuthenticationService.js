class AuthenticationService {

    registerSuccessfulLogin(username, password) {
        console.log('register successful login')
        sessionStorage.setItem('authenticatedUser', username);

    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        console.log(user)
        if (user === null) {
            console.log(user)
            return false
        } else {
            console.log(user)
            return true
        }

    }

    getLoggedInUserName(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user === null){
            return ''
        }else{
            return user
        }
    }


}
export default new AuthenticationService()