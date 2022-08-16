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
