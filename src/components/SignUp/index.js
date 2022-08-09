import styled from "styled-components"
import { Link } from "react-router-dom";
import { useState } from "react";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

export default function SignUp(){
    const [country, setCountry] = useState()
    const [region, setRegion] = useState()
    const [disabled, setDisabled] = useState(false);

    function handleSubmit(e){
        e.preventDefault()
        setDisabled(true)
        alert("submitou :)")
    }

    return(
        <Container>
            <Title>
                <h1>PawFinder</h1>
            </Title>
            <h1>Tell us more about you...</h1>
            <Form onSubmit={handleSubmit}>
                <input placeholder="Name"></input>
                <input type="email" placeholder="E-mail"></input>
                <input type="number" placeholder="Age"></input>
                <CountryDropdown 
                    value={country} 
                    onChange={(e) => setCountry(e)}/>
                <RegionDropdown
                    country={country} 
                    value={region}
                    onChange={(e) => setRegion(e)}/>
                <input type="password" placeholder="Password"></input>
                <input type="password" placeholder="Confirm password"></input>
                <Button type="submit" disabled={disabled}>Confirm</Button>
            </Form>
            <Link to="/"><p>Voltar</p></Link>
        </Container>
    )
}

const Button = styled.button`
    font-family: var(--font-texts);
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(93, 200, 41, 0.68);
    border-radius: 5px;
    width: 150px;
    height: 30px;
    color: #8CCC4F;
    font-weight: bold;
    margin: 7px 0;
`

const Container = styled.div`
    background: var(--color-darkblue);
    width: 100vw;
    height: 100vh;
    position: absolute;
    overflow: hidden;
    font-family: var(--font-texts);
    display: flex;
    flex-direction: column;
    align-items: center;
    & > h1{
        text-align: center;
        font-family: var(--font-title);
        margin: 30px 0 0 0;
        color: var(--color-lightyellow);
        font-size: 25px;
    }

    p{
        margin-top: 7px;
        font-weight: 500;
        color: var(--color-lightyellow);
        font-size: 13px;
    }
`
const Title = styled.div`
    width: 100%;
    font-family: var(--font-title);
    background-color: var(--color-yellow);
    color: var(--color-lightyellow);
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 45px;
    h1{
        font-weight: normal;
    }
`
const Form = styled.form`
    margin: 5px auto;
    padding: 10px 0;
    box-sizing: border-box;
    border-radius: 7px;
    width: 90%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    select{
        border-radius: 6px;
        height: 50px;
        width: 302px;
        margin: 10px;
        font-family: var(--font-texts);
        font-family: var(--font-texts);
        font-size: 15px;
    }
    input{
        border-radius: 5px;
        padding: 5px;
        box-sizing: border-box;
        height: 45px;
        width: 300px;
        margin: 10px;
        font-family: var(--font-texts);
        font-size: 15px;
        &::placeholder{
            color: black;
        }
    }
`

