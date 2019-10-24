import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {MdMenu} from 'react-icons/md'
import {FaUserCircle} from 'react-icons/fa'
import './Nav.css'
import me from '../../assets/me.jpg'
import {SignBtn} from '../SignBtn'

export const Menu = ({show})=>{
    let activeMenu = ''
    if(show){
        activeMenu = 'active'
    }else{
        activeMenu = ''
    }
    return <section className={`Menu ${activeMenu}`}>
        <Link to='/'>
            <h4>Home</h4>
        </Link>
        <Link to='/'>
            <h4>Home</h4>
        </Link>
        <Link to='/'>
            <h4>Home</h4>
        </Link>
    </section>
}

export const UserInfo = ({sessionActive,show})=>{
    let active = ''
    
    if(show){
        active = 'active'
    }else{
        active = ''
    }
    return <section className={`UserInfo ${active}`}>
        {
            (sessionActive) ? 
                <SignBtn account='logout' />
            : 
            <div>
                <SignBtn account='create' />
                <SignBtn account='login' />
            </div> 
        }
        
    </section>
}
export const Nav = ({session}) => {
    const [show, setShow] = useState(true)
    const [menu, setMenu] = useState(true)

    


    return <nav className="nav-container">
        <div onClick={()=>setShow(!show)}>
        {
            session ? <img className="Nav__user" src={me} alt="me"/>:<FaUserCircle/>
        }
        </div>
        
        <MdMenu onClick={()=>setMenu(!menu)} />
        <Menu show={menu} />
        <UserInfo show={show} sessionActive={session}/>
        
    </nav>
}
