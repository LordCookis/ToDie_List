import { useEffect, useState } from "react"
import Login from "./Registration/Login"
import Register from "./Registration/Register"
import { services } from "../services"

const LoginPage = () => {
    const [state, setState] = useState(true)
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const log = async(e) => {
        e.preventDefault()
        const result = await services.login.get(login, password)
        result ? alert("Добро пожаловать домой") : alert("Неверным дороги нет")
    }

    const reg = async(e) => {
        e.preventDefault()
        const result = await services.login.add(login, password)
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