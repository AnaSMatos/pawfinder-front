import styled from "styled-components"
import axios from "axios"
import { useState, useContext } from "react";
import UserContext from "../../UserContext";
import LoadingHearts from "../Layout/loaderSpinner";


export default function Post(props){
    const {name, age, description, image, country, region, userId} = props
    const {token} = useContext(UserContext)
    const [disabled, setDisabled] = useState(false)
    const [recipientEmail, setRecipientEmail] = useState("")
    const [confirm, setConfirm] = useState(false)

    function adopt(){
        setDisabled(true)
        setConfirm(true)
        const config = {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.get(`http://localhost:5000/adopt/${userId}`, config)
        promise
        .then(res => {
            setRecipientEmail(res.data)
            setDisabled(false)
        })
        .catch(err => {
            setDisabled(false)
            alert(err.response.data)
        })
    }

    return(
        <Container>
            <ConfirmAdoption className={confirm ? "open" : "closed"}>
                <h1>Are you sure you want to adopt {name}?</h1>
                <a href={`mailto:${recipientEmail}`}>Yes! Send email to the pets tutor</a>
                <button onClick={()=>setConfirm(false)}>Cancel</button>
            </ConfirmAdoption>
            <Picture>
                <img src={image} alt="animal"></img>
            </Picture>
            <Data>
                <div className="name">
                    <h1>{name},</h1><p>{age}</p>
                </div>
                <div className="location">
                <i className="fa-solid fa-location-dot"></i><p>{region},{country}</p>
                </div>
                <div className="description">
                    <p>{description}</p>
                </div>
            </Data>
            <Adopt disabled={disabled} onClick={adopt}>
                {disabled ? <LoadingHearts/> : 
                    <>
                        <p>I'm interested!</p>
                        <i className="fa-solid fa-heart"></i>           
                    </>
                }
            </Adopt>
        </Container>
    )
}

const ConfirmAdoption = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 100;
    background-color: rgba(255,255,255,0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: 40px;
        font-family: var(--font-title);
        font-size: 20px;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    }
    a{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: 70px;
        background-color: white;
        font-family: var(--font-texts);
        font-size: 15px;
        margin-top: 20px;
        box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
        &:visited{
            text-decoration: none;
        }
    }
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: 70px;
        background-color: white;
        font-family: var(--font-texts);
        font-size: 15px;
        margin-top: 20px;
        box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    }
    &.open{
        transform: translateY(0);
        transition: 0.7s ease;
    }
    &.closed{
        transform: translateY(100vh);
        transition: 0.7s ease;
    }
`

const Adopt = styled.button`
    background: rgba(239, 211, 156, 0.8);
    width: 125px;
    height: 20px;
    font-family: var(--font-texts);
    box-shadow: rgba(239, 211, 156, 0.5) 4px 4px, rgba(239, 211, 156, 0.4) 8px 8px;
    font-weight: 600;
    color: var(--color-yellow);
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    i{
        color: red;
    }
    @media (min-width: 600px){
        bottom: -40px;
    }
    @media (min-width: 1000px){
        bottom: -40px;
    }
`

const Container = styled.div`
    background: white;
    width: 94vw;
    height: 350px;
    margin: 12px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    @media (min-width: 600px){
        width: 500px;
        height: 400px;
    }
    @media (min-width: 1000px){
        width: 800px;
        height: 500px;
    }
`

const Picture = styled.div`
    width: 97%;
    height: 200px;
    margin-top: 6px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @media (min-width: 1000px){
        height: 300px;
    }
`

const Data = styled.div`
    width: 100%;
    height: 110px;
    padding: 10px;
    box-sizing: border-box;
    .name{
        display: flex;
        h1{
            font-family: var(--font-title);
            font-size: 19px;
            @media (min-width: 1000px){
                font-size: 25px;
            }
        }
        p{
            font-family: var(--font-texts);
            margin-left: 2px;
            @media (min-width: 1000px){
                font-size: 21px;
            }
        }
    }
    .description{
        /*cabe 186 caracteres pelo jeito, vou limitar pra 180*/
        margin-top: 5px;
        height: 70px;
        text-align: justify;
        overflow-wrap: break-word;
        hyphens: auto;
        font-family: var(--font-texts);
        @media (min-width: 1000px){
            font-size: 20px;
        }
    }
    .location{
        display: flex;
        align-items: center;
        i{
            font-size: 10px;
            color: #C9C9C9;
            margin-right: 3px;
        }
        p{
            color: #C9C9C9;
            font-family: var(--font-texts);
            font-size: 12px;
            margin-top: 2px;
            @media (min-width: 1000px){
                font-size: 17px;
            }
        }
    }
`