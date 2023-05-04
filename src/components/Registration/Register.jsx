const Register = ({setState, setLogin, setPassword, reg}) => {
    return (
        <>
        <center><span id="reg-span">Каков вкус жизни?</span></center><hr />
        <center>
            <div className="div_radio">
                <input type="radio" name="answer"/><label id="check_label">Гнилой</label>
            </div>
            <div className="div_radio">
                <input type="radio" name="answer"/><label id="check_label">Безвкусный</label>
            </div>
            <div className="div_radio">
                <input type="radio" name="answer"/><label id="check_label">Эээ... Может сладий? Как мед!</label>
            </div>
        </center><hr />
        <form id="form" onSubmit={reg}>
            <input id="input" autoComplete="off" placeholder="Назови свое имя" onChange={(e)=>setLogin(e.target.value)}/>
            <br /><br />
            <input id="input" autoComplete="off" placeholder="Каков твой пароль?" onChange={(e)=>setPassword(e.target.value)}/>
            <br /><br />
            <button id="add-button">Примкнуть к Братству</button>
        </form><hr />
        <button onClick={()=>setState(true)} id="add-button">вход</button>
        </>
    )
}

export default Register