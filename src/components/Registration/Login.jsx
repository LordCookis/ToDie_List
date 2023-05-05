const Login = ({setState, setLogin, setPassword, log}) => {
    return (
        <>
        <form id="form" onSubmit={log}>
            <input id="input" autoComplete="off" placeholder="Назови свое имя" onChange={(e)=>setLogin(e.target.value)}/>
            <br /><br />
            <input id="input" autoComplete="off" placeholder="Каков твой пароль?" onChange={(e)=>setPassword(e.target.value)}/>
            <br /><br />
            <button id="add-button">Войти в убежище</button>
        </form><hr />
        <button onClick={()=>setState(false)} id="add-button">Примкнуть к Братству</button>
        </>
    )
}

export default Login