import "./Intro.css"
import View from "../../images/view.png";

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className="i-intro">Hello, my name is</h2>
                    <h1 className="intro-name">Denis Iordan</h1>
                    <div className="intro-title">
                        <div className="intro-title-wrapper">
                            <div className="intro-title-item">Developer</div>
                            <div className="intro-title-item">Content Creator</div>
                        </div>
                    </div>
                    <p className="intro-desc">
                        Creating websites and applications.
                    </p>
                </div>
            </div>    
            <div className="intro-right">
                <div className="image-bg"></div>
                <img src={View} alt="" className="intro-img" />
            </div>
        </div>
    )
}

export default Intro
