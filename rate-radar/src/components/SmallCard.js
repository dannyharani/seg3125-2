import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function SmallCard({image, title}) {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/media';
        navigate(path);
    }

    return (
        <Card className="smallCard" onClick={routeChange} style = {{ width: '230px'}}>
            <Card.Img className="smallCardImage" variant='left' src={image} />
            <Card.Body className="smallCardContent">
                <Card.Title className="smallCardTitle">{title}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default SmallCard;