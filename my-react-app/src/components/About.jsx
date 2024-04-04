import "../styles/About.css";
import SLogo from '../assets/S.png';
import DadAndI from '../assets/IMG_7136.jpg';
const About = () => {
    return (
        <>
            <img src={SLogo}  alt="this sick logo I just made" width="200" height="150" className="inline-elements" />
            <h1>Meet Simrith Ranjan</h1>
            <h3 className="titles">Hello, my name is Simrith!</h3>
            <a href="https://www.youtube.com/watch?v=HIkIqt_ytdc&list=PLnQTlEwp4k2B2-wjtTd6a-WjMYlMPD5bY&index=38" target="_blank">Check out this youtube video I really like</a>
            <p>I'm a first year at Purdue boilerUp March Madness dubs (Top 8)</p>
            <img src={DadAndI} alt="My Dad and I" width="200" height="150" className="center" />
            <p>My favorite foods:</p>
            <ul className="fav-food">
                <li>Subway Sandwiches</li>
                <li>Cotton Candy Icecream</li>
                <li>Brownies</li>
            </ul>
            <div style={{ color: "pink", fontSize: "24px", backgroundColor: "grey" }}>I wanted to use an inline style so here it is!.</div>
            <div id="unique-element">woah uniqueID.</div>
        </>
    );
};

export default About;
