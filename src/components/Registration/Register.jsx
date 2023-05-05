const Register = ({setState, setLogin, setPassword, reg}) => {
    return (
        <>
        <form id="form" onSubmit={reg}>
            <input id="input" autoComplete="off" placeholder="Назови свое имя" onChange={(e)=>setLogin(e.target.value)}/>
            <br /><br />
            <input id="input" autoComplete="off" placeholder="Каков твой пароль?" onChange={(e)=>setPassword(e.target.value)}/>
            <br /><br />
            <button id="add-button">Примкнуть к Братству</button>
        </form><hr />
        <button onClick={()=>setState(true)} id="add-button">Войти в убежище</button>
        </>
    )
}

export default Register