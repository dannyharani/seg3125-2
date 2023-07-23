import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { prominent } from 'color.js';
import { useState } from 'react';

function SmallCard({mediaType, image, title, lang, isVisible = true}) {

    const [bgColor, setbgColor] = useState('white');

    let navigate = useNavigate(title, mediaType, bgColor);
    const routeChange = () => {
        if (title !== undefined && mediaType !== undefined)
        {
            let path = '/media?mediaType=' + mediaType + '&title='+title + '&color=%23'+bgColor.slice(1, bgColor.length) + '&lang=' + lang;
            navigate(path);
        }
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
    }).catch(e => {
        setbgColor('lightgray');
    })

    if (image)
    {
        return (
            <Card className="smallCard" onClick={routeChange} style = {{ width: '230px', 'backgroundColor':bgColor}}>
                <Card.Img className="smallCardImage" variant='left' src={image} />
                
                <Card.Body className="smallCardContent">
                    <Card.Title className="smallCardTitle">{title}</Card.Title>
                </Card.Body>
            </Card>
        )
    }
    return (
        <Card className="smallCard smallCardNoImg" onClick={routeChange} style = {{ width: '230px', 'backgroundColor':bgColor}}>
            <Card.Body className="smallCardContent">
                <Card.Title className="smallCardTitle">{title}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default SmallCard;