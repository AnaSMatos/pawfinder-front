import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "../../UserContext";

export default function Top(){
    const navigate = useNavigate()
    const {page, setPage} = useContext(UserContext)
    const [sidebar, setSidebar] = useState(false)
    return(
            <>
                <Topo>
                    <button onClick={()=>{
                        setPage("")
                        navigate("/feed")
                    }}><i className="fa-solid fa-paw"></i></button>
                    <button className="profile" onClick={()=>setSidebar(!sidebar)}><i className="fa-solid fa-user"></i></button>
                </Topo>
                <Sidebar className={sidebar ? "open" : "closed"}>
                    <button onClick={()=>navigate("/")}>VOLTAR PARA A TELA DE LOGIN nd hopefully log u out thank god</button>
                </Sidebar>
            </>
    )
}


const Topo = styled.div`
    background: var(--color-darkblue);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: fixed;
    z-index: 2;
    width: 100vw;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    box-sizing: border-box;
    .fa-paw{
        font-size: 40px;
        color: var(--color-orange);
    }
    button{
        background: none;
    }
    .profile{
        background: rgba(256, 256, 256, 0.25);
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .fa-user{
        font-size: 22px;
        color: white;
    }
    @media (min-width: 1000px){
        width: 800px;
    }
`

const Sidebar = styled.div`
    position: absolute;
    z-index: 1;
    width: 100vw;
    height: 120px;
    top: 65px;
    right: 0;
    background-color: rgba(100, 132, 163, 1);
    &.open{
        transform: translateY(0);
        transition: 0.7s ease;
    }
    &.closed{
        transform: translateY(-100vh);
        transition: 0.7s ease;
    }
`