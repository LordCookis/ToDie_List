import { useState } from "react"
import Login from "./Registration/Login"
import Register from "./Registration/Register"
import { services } from "../services"

const LoginPage = ({setSession}) => {
    const [state, setState] = useState(true)
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const log = async(e) => {
        e.preventDefault()
        const result = await services.login.get(login, password)
        if (result) {
            alert("Добро пожаловать домой")
            setSession(result)
        } else {
            alert("Неверным дороги нет")
            return
        }
    }

    const reg = async(e) => {
        e.preventDefault()
        await services.login.add(login, password)
        const result = await services.login.get(login, password)
        if (result) {
            alert("Добро пожаловать домой")
            setSession(result)
        } else {
            alert("Неверным дороги нет")
            return
        }
    }

    return (
        <div>
            {state 
            ? <Login 
                setState={setState} 
                setLogin={setLogin}
                login={login}
                setPassword={setPassword}
                password={password}
                log={log}
                /> 
            : <Register 
                setState={setState}
                setLogin={setLogin}
                login={login}
                setPassword={setPassword}
                password={password}
                reg={reg}
                />}
        </div>
    )
}

export default LoginPage