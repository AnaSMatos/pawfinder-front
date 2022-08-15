import styled from "styled-components"
import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Post from "../Post";
import Top from "../Top";
import UserContext from "../../UserContext";

export default function Feed(){
    const {token, page, setPage} = useContext(UserContext)
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])
    
    
    useEffect(()=>{
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.get(`http://localhost:5000/feed${page}`, config)
        promise
        .then(res => {
            setPosts(res.data)
        })
        .catch(err=> {
            if(err.response.status === 401){
                alert("Sua sessão expirou! Faça login novamente")
                navigate("/")
            }
            console.log(err.response.status)
        })
    }, [page])

    return(
        <Container>
            <Top/>
            <Options>
                <NewPost onClick={()=>navigate("/create")}>+ New post!</NewPost>
                <AnimalTypes>
                    <button onClick={()=>{
                        setPage("?type=Dog")
                        navigate("/feed?type=dog")
                    }}>
                        <i className="fa-solid fa-dog"></i>
                    </button>
                    <button onClick={()=>{
                        setPage("?type=Cat")
                        navigate("/feed?type=cat")
                    }}>
                        <i className="fa-solid fa-cat"></i>
                    </button>
                </AnimalTypes>
            </Options>
            <PostsContainer>
                {posts.map((post, index) => {
                    return(
                        <Post key={index} userId={post.userId} name={post.animalName} age={post.animalAge} description={post.description} image={post.image} country={post.country} region={post.region}></Post>
                    )
                })}
            </PostsContainer>
        </Container>
    )
}

const Container = styled.div`
    background: #F1ECEC;
    display: flex;
    align-items: center;
    flex-direction: column;
`


const Options = styled.div`
    background-color: var(--color-yellow);
    margin-top: 65px;
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 1000px){
        width: 800px;
    }
`
const NewPost = styled.button`
    margin-top: 10px;
    width: 90%;
    height: 37px;
    background: #50AD24;
    border-radius: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-title);
    color: white;
    font-size: 20px;
`
const AnimalTypes = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 12px;
    button{
        background: #FFFFFF;
        border-radius: 12px;
        height: 50px;
        width: 40%;
    }
    i{
        font-size: 23px;
    }
`

const PostsContainer = styled.div`
    background-color: #F1ECEC;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

