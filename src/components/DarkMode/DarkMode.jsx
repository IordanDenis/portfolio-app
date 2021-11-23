import "./DarkMode.css"
import Sun from "../../images/sun.png"
import Moon from "../../images/moon.png"
import { useContext } from "react"
import { ThemeContext } from "../../context"


const DarkMode = () => {

    const theme = useContext(ThemeContext)
    
    const handleClick = () => {
        theme.dispatch({type:"TOGGLE"})
    }

    return (
        <div className="dark-mode">
            <img src={Sun} alt="" className="dm-icon"/>
            <img src={Moon} alt="" className="dm-icon"/>
            <div className="dm-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0: 25}}></div>
        </div>
    )
}

export default DarkMode
