import Card from 'react-bootstrap/Card';
import Pill from '../Pill';
import { useNavigate } from 'react-router-dom';

function MainCard({image, title, content, pill1, pill2, isVisible = true}) {
    
    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/media';
        navigate(path);
    }

    return (
        <div className='cardHolder' style = {{ display: isVisible ? 'table-cell' : 'none'}}>
            <Card className="mainCard" onClick={routeChange}>
                <Card.Img className="cardImage" variant='top' src={image} />
                <Card.Body className="cardContent">
                    <Card.Title className="cardTitle">{title}</Card.Title>
                    <Card.Text className="cardText">
                        {content}
                    </Card.Text>
                </Card.Body>
                    <Pill text={pill1}/>
                    <Pill text={pill2}/>
            </Card>
        </div>
    )
}

export default MainCard;