import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import Top from "../Top"
import LoadingHearts from "../Layout/loaderSpinner";
import { useEffect, useState } from "react";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export default function CreatePost(){
    const navigate = useNavigate()
    const [animalName, setAnimalName] = useState("")
    const [animalType, setAnimalType] = useState("Dog")
    const [animalAge, setAnimalAge] = useState("")
    const [gender, setGender] = useState("Male")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [disabled, setDisabled] = useState(false);
    const token = localStorage.getItem("token")

    useEffect(() => {
        if(!token){
            alert("Sua sessão expirou! Faça login novamente")
            navigate("/")
        }
    }, [token])

    function handleSubmit(e){
        e.preventDefault()
        setDisabled(true)
        const config = {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }

        const data = {
            animalName, animalType, animalAge: Number(animalAge), description, image
        }

        const promise = axios.post(`${process.env.REACT_APP_URL}/create`, data, config)
        promise
        .then((res) => {
            navigate("/feed")
        })
        .catch((err) => {
            if(err.response.status === 401){
                alert("Sua sessão expirou! Faça login novamente")
                navigate("/")
            }
            console.log(err.response.data)
            setDisabled(false)
        })
    }

    return(
        <Container>
            <div className="background-top"></div>
            <Top/>
            <div className="background-content"></div>
            <Content>
                <div>
                    <h1>Let's find a home to your pet!</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <label>What's the pet's name?</label>
                    <input 
                        type="text"
                        value={animalName}
                        onChange={(e) => setAnimalName(e.target.value)}
                        disabled={disabled}
                        required
                    ></input>
                    <label>What's it's age?</label>
                    <input 
                        type="number"
                        value={animalAge}
                        onChange={(e) => setAnimalAge(e.target.value)}
                        disabled={disabled}
                        required
                    ></input>
                    <label>Is it a dog or a cat?</label>
                    <select
                        value={animalType}
                        onChange={(e) => setAnimalType(e.target.value)}
                        disabled={disabled}
                    >
                        <option>Dog</option>
                        <option>Cat</option>
                    </select>
                    <label>Gender:</label>
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        disabled={disabled}
                    >
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                    <label>Link for the pet's photo</label>
                    <input 
                        type="url"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        disabled={disabled}
                        required
                    ></input>
                    <label>Give a brief description of the pet:</label>
                    <textarea 
                        maxLength="180"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        disabled={disabled}
                        required
                    />
                    <Button type="submit" disabled={disabled}>{disabled ? <LoadingHearts/> : "Confim"}</Button>
                </form>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: hidden;
    .background-top{
        position: absolute;
        width: 100%;
        height: 66px;
        background: var(--color-darkblue);
    }
    .background-content{
        position: absolute;
        top: 66px;
        width: 100%;
        height: 100%;
        background: var(--color-yellow);
    }
`

const Button = styled.button`
    font-family: var(--font-texts);
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-lightblue);
    border-radius: 5px;
    width: 150px;
    height: 30px;
    color: var(--color-darkblue);
    font-weight: bold;
    margin: 10px 0;
    @media (min-width: 600px){
        font-size: 20px;
        width: 180px;
        height: 40px;
    }
    @media (min-width: 0px){
        .loading{
            position: relative;
            bottom: 13px;
        }
    }
`

const Content = styled.div`
    position: absolute;
    background: var(--color-yellow);
    width: 100vw;
    height: 100vh;
    top: 66px;
    @media (min-width: 600px){
        width: 900px;
    }
    form{
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        label{
            font-family: var(--font-texts);
            font-size: 16px;
            @media (min-width: 600px){
                font-size: 20px;
            }
        }
        input{
            outline: none;
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
            @media (min-width: 600px){
                width: 500px;
                height: 60px;
                font-size: 20px;
            }
    }
        select{
            outline: none;
            border: none;
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
            @media (min-width: 600px){
                width: 500px;
                height: 60px;
                font-size: 20px;
            }
        }
        textarea{
            resize: none;
            border: none;
            border-radius: 6px;
            outline: none;
            width: 293px;
            height: 90px;
            padding: 5px;
            font-size: 15px;
            font-family: var(--font-texts);
            margin-top: 5px;
            @media (min-width: 600px){
                width: 500px;
                height: 150px;
                font-size: 20px;
            }
        }
    }
    div{
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: var(--font-title);
        font-size: 20px;
        @media (min-width: 600px){
            font-size: 30px;
            margin-bottom: 15px;
        }
    }
`