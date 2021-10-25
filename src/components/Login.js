import "../css/Login.css";

function Login() {
    return (
        <>
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                        <h3 className="mt-4">Connectez-vous</h3>
                        <i className="fa fa-user fa-3x mt-2" id="icon"></i>
                    </div>

                    <form>
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
                        <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                        <input type="submit" className="fadeIn fourth" value="Log In" />
                    </form>

                    <div id="formFooter">
                        <a className="underlineHover" href="#">Forgot Password?</a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login;
