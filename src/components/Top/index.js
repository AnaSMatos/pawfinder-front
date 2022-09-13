import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "../../UserContext";

export default function Top(){
    const navigate = useNavigate()
    const {setPage} = useContext(UserContext)
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
                    <Option onClick={()=>navigate("/applications")}>
                        <i className="fa-solid fa-list"></i>
                        <p>Applications</p>
                    </Option>
                    <Option
                        onClick={() => {
                            localStorage.removeItem("token")
                            navigate("/")
                        }}
                    >
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        <p>LogOut</p>
                    </Option>
                </Sidebar>
            </>
    )
}


const Topo = styled.div`
    background: var(--color-darkblue);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: fixed;
    z-index: 3;
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
        cursor: pointer;
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
    background: var(--color-darkblue);
    position: absolute;
    right: 0;
    top: 65px;
    height: 120px;
    width: 100%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &.open{
        transform: translateY(0);
        transition: 0.7s ease;
    }
    &.closed{
        transform: translateY(-200px);
        transition: 0.7s ease;
    }
`

const Option = styled.button`
    width: 100%;
    height: 59px;
    display: flex;
    align-items: center;
    padding: 15px;
    box-sizing: border-box;
    background: white;
    font-size: 15.2px;
    cursor: pointer;
    &:hover{
        background-color: #ededed;
    }
    i{
        margin-right: 7px;
    }
    p{
        font-family: var(--font-texts);
        font-weight: 500;
    }
`
