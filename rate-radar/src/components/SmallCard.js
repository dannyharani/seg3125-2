import Card from 'react-bootstrap/Card';

function SmallCard({image, title}) {
    return (
        <Card className="smallCard" style = {{ width: '230px'}}>
            <Card.Img className="smallCardImage" variant='left' src={image} />
            <Card.Body className="smallCardContent">
                <Card.Title className="smallCardTitle">{title}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default SmallCard;