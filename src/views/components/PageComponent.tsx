import * as React from 'react';
import { Card, Row, Container} from 'react-bootstrap';

const PageComponent = (props: any) => {
return (
    <Container>
    <Row className="justify-content-md-center">
        <Card bg="light" style={{ width: '70rem' }}>
            <Card.Body>
                {props.children}
                
            </Card.Body>
            <Card.Header className="text-center">Page {props.id}</Card.Header>
        </Card>
    </Row>
</Container>
);
};
export default PageComponent;
