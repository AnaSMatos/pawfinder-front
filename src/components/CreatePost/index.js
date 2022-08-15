import styled from "styled-components"
import Top from "../Top"
import LoadingHearts from "../Layout/loaderSpinner";
import { useState, useContext } from "react";
import UserContext from "../../UserContext";

export default function CreatePost(){
    const [animalName, setAnimalName] = useState("")
    const [animalType, setAnimalType] = useState("Dog")
    const [animalAge, setAnimalAge] = useState("")
    const [gender, setGender] = useState("Male")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [disabled, setDisabled] = useState(false);
    const {token} = useContext(UserContext)


    function handleSubmit(e){
        e.preventDefault()

        const config = {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }

        const data = {
            animalName, animalType, animalAge: Number(animalAge), description, image
        }
    }

    return(
        <Container>
            <Top/>
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
                    ></input>
                    <label>What's it's age?</label>
                    <input 
                        type="number"
                        value={animalAge}
                        onChange={(e) => setAnimalAge(e.target.value)}
                        disabled={disabled}
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
                    ></input>
                    <label>Give a brief description of the pet:</label>
                    <textarea 
                        maxLength="180"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        disabled={disabled}
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
`

const Content = styled.div`
    position: absolute;
    background: var(--color-yellow);
    width: 100vw;
    height: 100vh;
    top: 65px;
    form{
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        label{
            font-family: var(--font-texts);
            font-size: 16px;
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
        }
    }
    div{
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: var(--font-title);
        font-size: 20px;
    }
`