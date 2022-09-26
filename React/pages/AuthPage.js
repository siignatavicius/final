import { useEffect, useRef, useState ,useContext} from 'react';
import { useNavigate } from "react-router-dom";
import MainContext from '../context/MainContext';



const AuthPage = () => {
    const nav = useNavigate()
    const { setUser } = useContext(MainContext)

    const regUsernameRef = useRef()
    const regPassOneRef = useRef()
    const regPassTwoRef = useRef()
    const regCityRef = useRef()
    const regGenderRef = useRef()
    const regAgeRef = useRef()

    const logUsernameRef = useRef()
    const logPasswordRef = useRef()

    const [error, setError] = useState(null)

    function register() {
        const user = {
            name: regUsernameRef.current.value,
            passOne: regPassOneRef.current.value,
            passTwo: regPassTwoRef.current.value,
            city: regCityRef.current.value,
            gender: regGenderRef.current.value,
            age: regAgeRef.current.value
        }

        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        }

        fetch('http://localhost:4000/register', options)
            .then(res => res.json())
            .then(data => {
                if (data.error) return setError(data.message)
                setError("registration ok")

                regUsernameRef.current.value = ""
                regPassOneRef.current.value = ""
                regPassTwoRef.current.value = ""
                regCityRef.current.value = ""
                regGenderRef.current.value = ""
                regAgeRef.current.value = ""
            })


    }

    function login() {
        const user = {
            name: logUsernameRef.current.value,
            password: logPasswordRef.current.value
        }

        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user),
            credentials: "include"
        }

        fetch('http://localhost:4000/login', options)
            .then(res => res.json())
            .then(data => {
                if (data.error) return setError(data.message)

                console.log(data)
               
                setUser(data.data)
                

                nav("/profile")

            })
    }

    function autoLoginTrigger(e) {

        localStorage.setItem("autologin", String(e.target.checked))
    }

    useEffect(() => {
        const autologin = localStorage.getItem("autologin")

        if (autologin === "true") {
            const options = {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                },
                credentials: "include"
            }

            fetch('http://localhost:4000/autologin', options)
                .then(res => res.json())
                .then(data => {
                    if (!data.error) {
                        setUser(data.data)
                        nav('/profile')
                    }
                    console.log(data)
                })
        }
    }, [])

    return (
        <div className='d-flex'>
            <div className="grow1 d-flex j-center a-center flex-column log">
                <h4>REGISTER</h4>
                <input ref={regUsernameRef} type="text" placeholder="user name" />
                <input ref={regPassOneRef} type="text" placeholder="create password" />
                <input ref={regPassTwoRef} type="text" placeholder="repeat password" />
                <input ref={regCityRef} type="text" placeholder="city" />
                <input ref={regGenderRef} type="text" placeholder="gender" />
                <input ref={regAgeRef} type="number" placeholder="age" />
                <button onClick={register}>REGISTER</button>

                {error && <h4>{error}</h4>}
            </div>

            <div className="grow1 d-flex j-center a-center flex-column log">
                <h4>LOGIN</h4>
                <input ref={logUsernameRef} type="text" placeholder="user name" />
                <input ref={logPasswordRef} type="text" placeholder="password" />
                <div>
                    <label htmlFor='check'>Stay logged in</label>
                    <input onChange={autoLoginTrigger} type="checkbox" id="check" />
                </div>

                <button onClick={login}>LOGIN</button>
            </div>
        </div>
    );
};

export default AuthPage;