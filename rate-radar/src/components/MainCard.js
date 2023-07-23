import Card from 'react-bootstrap/Card';
import Pill from '../Pill';
import { useNavigate } from 'react-router-dom';
import { prominent } from 'color.js';
import { useState } from 'react';


function MainCard({mediaType, image, title, content, pill1, pill2, lang, isVisible = true}) {
    
    const [bgColor, setbgColor] = useState('white');
    const [shadow, setShadow] = useState('');
    
    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/media?mediaType=' + mediaType + '&title='+title + '&color=%23'+bgColor.slice(1, bgColor.length) + '&lang='+lang;
        navigate(path);
    }

    prominent(image, {amount:1}).then(color => {

        var r = color[0], g = color[1], b = color[2];

        if ((r + g + b)/3 < 130) 
        {
            r = Math.floor((255 - r) * 0.8)
            g = Math.floor((255 - g) * 0.8)
            b = Math.floor((255 - b) * 0.8)
        } else if ((r + g + b)/3 > 240) {
            r = Math.floor(r * 0.9)
            g = Math.floor(g * 0.9)
            b = Math.floor(b * 0.9)
        }

        var val = r.toString(16) + g.toString(16) + b.toString(16);
        setbgColor("#" + val);

        r = Math.floor(r * 0.8)
        g = Math.floor(g * 0.8)
        b = Math.floor(b * 0.8)
    
        val = r.toString(16) + g.toString(16) + b.toString(16);
        setShadow("6px 6px 7px #" + val);
    })


    return (
        <div className='cardHolder' style = {{ display: isVisible ? 'table-cell' : 'none'} }>
            <Card style = {{'backgroundColor':bgColor}} className="mainCard" onClick={routeChange}>
                <Card.Img title={"Cover image for " + title} alt={"Cover image for " + title} className="cardImage" style={{'boxShadow':shadow}} variant='top' src={image} />
                <Card.Body className="cardContent">
                    <Card.Title className="cardTitle">{title}</Card.Title>
                    <Card.Text className="cardText">
                        {content}
                    </Card.Text>
                </Card.Body>
                    <div className='pillHolder'>
                        <Pill text={pill1} shadowColor={shadow}/>
                        <Pill text={pill2} shadowColor={shadow}/>
                    </div>
            </Card>
        </div>
    )
}

export default MainCard;