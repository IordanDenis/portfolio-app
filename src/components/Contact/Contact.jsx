import "./Contact.css"
import Phone from "../../images/phone.png"
import Email from "../../images/email.png"
import Address from "../../images/address.png"
import Instagram from "../../images/instagram.png"
import LinkedIn from "../../images/linkedin.png"
import GitHub from "../../images/github.png"
import { useRef, useState } from "react"
import emailjs from 'emailjs-com'


const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs
            .sendForm(
                'service_k03xmnu',
                'template_5gvlnd5',
                formRef.current,
                'user_dh9H30NEfnKErhhfwr5Ps'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true)
                },
                (error) => {
                    console.log(error.text);
                }
            );
    }


    return (
        <div className="contact">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project.</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img
                             src={Phone}
                             alt="" 
                             className="c-icon" 
                            />
                            0725 520 847
                        </div>
                        <div className="c-info-item">
                            <img
                             src={Email}
                             alt="" 
                             className="c-icon" 
                            />
                            iordan.denis98@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img
                             src={Address}
                             alt="" 
                             className="c-icon" 
                            />
                            Bucharest
                        </div>
                    </div>
                    <h1 className="c-title">Socials:</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img
                            src={Instagram}
                            alt="" 
                            className="c-icon" 
                            />
                            <a target="_blank" href="https://www.instagram.com/denis.jordann/">Instagram</a>
                        </div>
                        <div className="c-info-item">
                            <img
                            src={LinkedIn}
                            alt="" 
                            className="c-icon" 
                            />
                            <a target="_blank" href="https://www.linkedin.com/in/iordan-denis/">LinkedIn</a>
                        </div>
                        <div className="c-info-item">
                            <img
                            src={GitHub}
                            alt="" 
                            className="c-icon" 
                            />
                            <a target="_blank" href="https://github.com/IordanDenis">GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Let's get in touch. Always available for
                        discussions that can build up to new projects.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div className="inputs">
                            <input type="text" placeholder="Name" name="user_name"/>
                            <input type="text" placeholder="Subject" name="user_subject"/>
                            <input type="text" placeholder="Email" name="user_email"/>
                            <textarea rows="5" placeholder="Message" name="message"/>
                        </div>
                        <div className="submit">
                            <button>Submit</button>
                            <p className="submit-text">{done && "Thank you"}</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
