import styled from "styled-components"
import puppy from "../../assets/puppy-bg.jpg"
import { useNavigate } from "react-router-dom"

export default function Post(props){
    const navigate = useNavigate()
    const {name, age, description, image, country, region} = props
    return(
        <Container>
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
            <Adopt onClick={()=>alert("nice!")}>
                <p>I'm interested!</p>
                <i className="fa-solid fa-heart"></i>
            </Adopt>
        </Container>
    )
}

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
    i{
        color: red;
    }
`

const Container = styled.div`
    background: white;
    width: 95vw;
    height: 350px;
    margin: 12px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
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
        }
        p{
            font-family: var(--font-texts);
            margin-left: 2px;
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
        }
    }
`