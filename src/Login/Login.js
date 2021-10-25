import React, {useState, useEffect} from 'react'
import './Login.css'
export default function Login() {
    return (
      
            
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                        <h3 className="mt-4">Connexion</h3>
                        <i className="fa fa-user fa-3x mt-2" id="icon"></i>
                    </div>

                    <form>
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
                        <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                        <input type="submit" className="fadeIn fourth" value="Connectez-vous" />
                    </form>

                    <div id="formFooter">
                        <a className="underlineHover" href="#">Mot de passe oublié ?</a>
                    </div>

                </div>
            </div>
        
       
    )
}
