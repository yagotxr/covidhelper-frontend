import React, { Component} from 'react'; 

class Map extends Component {

    constructor(props) {
        super(props);
        this.state = {
            localizacao: []
        }
      }
    
    componentDidMount() {
        this.getLocal()
    }

    getLocal(){
        navigator.geolocation.getCurrentPosition( location => {
            console.log(location);
        });
    }
    
    render() {
        return (
            <div >
            </div>
        )
    }
}
  

export default Map