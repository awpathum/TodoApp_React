import Axios from "axios";

class AuthenticationService {

    registerSuccessfulLogin(username, password) {
        console.log('register successful login')
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors()

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

    getLoggedInUserName() {
        let user = sessionStorage.getItem('authenticatedUser')
        if (user === null) {
            return ''
        } else {
            return user
        }
    }

    setupAxiosInterceptors() {
        let username = 'mamba'
        let password = 'mamba123'
        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)
        Axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = basicAuthHeader
                }
                return config

            }

        )
    }


}
export default new AuthenticationService()