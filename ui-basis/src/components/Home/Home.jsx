import React, { Component} from 'react'
import '../../assets/scss/Form.scss'
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';



class Home extends Component {
    
    render() {
        return (
            <div>
                <Card style={{width: '20rem'}}>
    <CardBody>
        <CardTitle>Special title treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button href="/#" color="primary">Go somewhere</Button>
    </CardBody>
</Card>
<Card style={{width: '20rem'}} className="text-center">
    <CardBody>
        <CardTitle>Special title treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button href="/#" color="primary">Go somewhere</Button>
    </CardBody>
</Card>
<Card style={{width: '20rem'}} className="text-right">
    <CardBody>
        <CardTitle>Special title treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button href="/#" color="primary">Go somewhere</Button>
    </CardBody>
</Card>
            </div>
        )
    }
}
  

export default Home