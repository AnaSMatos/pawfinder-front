import styled from "styled-components"
import image from "./../../assets/puppy.png"
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignIn(){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [disabled, setDisabled] = useState(false);

    function handleSubmit(e){
        e.preventDefault()
        setDisabled(true)
        alert("submitou :)")
    }
    return(
        <Container> 
            <BottomBar>
                <img src={image} alt="cute puppy"></img>
                <h1>PawFinder</h1>
                <InputBox onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        placeholder="e-mail"
                        onChange={(e) => setEmail(e)}></input>
                    <input 
                        type="password" 
                        placeholder="password"
                        onChange={(e) => setPassword(e)}></input>
                    <button type="submit" disabled={disabled}>LogIn</button>
                </InputBox>
                <Link to="/sign-up">
                    <p>Create an account</p>
                </Link>
            </BottomBar>
        </Container>
    )
}

const Container = styled.div`
    background: var(--color-yellow);
    width: 100vw;
    height: 100vh;
    position: absolute;
    overflow: hidden;
    font-family: var(--font-texts);
`

const BottomBar = styled.div`
    position: absolute;
    width: 100vw;
    height: 370px;
    z-index: 1;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--color-darkblue);
    img{
        z-index: 0;
        position: relative;
        width: 395px;
        height: 296px;
        left: -98px;
        top: -274.4px;
        transform: rotate(4deg);
    }
    h1{
        text-align: center;
        position: relative;
        bottom: 275px;
        color: var(--color-lightyellow);
        font-family: var(--font-title);
        font-size: 45px;
    }
    p{
        color: var(--color-lightyellow);
        position: relative;
        bottom: 20px;
        font-size: 15px;
    }
`

const InputBox = styled.form`
    background: rgba(100, 132, 163, 0.4);
    border-radius: 13px;
    position: absolute;
    width: 296px;
    height: 184px;
    top: 94px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    input{
        border-radius: 5px;
        margin-bottom: 20px;
        width: 90%;
        height: 45px;
        outline: none;
        font-size: 20px;
        padding: 10px;
        box-sizing: border-box;
    }
    button{
        background: var(--color-orange);
        color: var(--color-lightyellow);
        font-family: var(--font-texts);
        font-weight: bold;
        font-size: 15px;
        border-radius: 5px;
        width: 80px;
        height: 25px;
    }
`