import Card from 'react-bootstrap/Card';

function MainCard({image, title, content, pills, isVisible = true}) {
    return (
        <Card className="mainCard" style = {{ width: '190px', display: isVisible ? 'inline' : 'none'}}>
            <Card.Img className="cardImage" variant='top' src={image} />
            <Card.Body className="cardContent">
                <Card.Title className="cardTitle">{title}</Card.Title>
                <Card.Text className="cardText">
                    {content}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MainCard;