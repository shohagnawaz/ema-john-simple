import React from 'react';
import './Camera.css';
import img1 from '../../images/c1.jpg';
import img2 from '../../images/c2.jpg';
import img3 from '../../images/c3.jpg';
import img4 from '../../images/c4.jpg';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Camera = () => {
    return (
        <div>
            <div className="container">            
            <h2 className="text-center my-5">Camera</h2>
            <div className="row">
                <div className="col-lg-3">
                    <Card className="card">
                        <CardImg className="cardImage" top width="100%" src={img1} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Canon</CardTitle>
                            <CardSubtitle>Model-D-600</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>add to cart</Button>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-lg-3">
                    <Card>
                        <CardImg top width="100%" src={img2} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Canon</CardTitle>
                            <CardSubtitle>Model-D-600</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>add to cart</Button>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-lg-3">
                    <Card>
                        <CardImg top width="100%" src={img3} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Canon</CardTitle>
                            <CardSubtitle>Model-D-600</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>add to cart</Button>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-lg-3">
                    <Card>
                        <CardImg top width="100%" src={img4} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Canon</CardTitle>
                            <CardSubtitle>Model-D-600</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>add to cart</Button>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Camera;