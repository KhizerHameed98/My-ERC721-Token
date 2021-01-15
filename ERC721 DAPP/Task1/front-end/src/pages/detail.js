import React ,{Component,useState, useEffect} from 'react';
import '/home/khizer/Documents/Khzr Data/OptimusFox/RoadMap Tasks/ERC721 DAPP/Task1/front-end/src/App.css'
import Axios from 'axios';

class  Detail extends Component {
    state={
        color:'',
        owner: '',
        check: false
    }
    


    componentDidMount(){
        if(this.props.location && this.props.location.state && this.props.location.state.color){
             this.setState({
                 color:this.props.location.state.color
             })
             var color = this.props.location.state.color.colorText;
             var id = this.props.location.state.color.id;
             this.setState({
                 color: color,
                 id: id
             })
             console.log("=========" + color);
             console.log("=========" + id);
             Axios.post('http://localhost:5000/ownerOf',{
                tokenId: id,

             }).then((response) =>{
                 console.log(response.data);
                 this.setState({
                     owner: response.data,
                     check: true
                 })

             })
        }
    }

    render(){
    return(
        <>
         {
             (this.state.check &&
                
                <div  className="col-md-12  mt-5 text-center">
                <div className="token2" style={{ backgroundColor: this.state.color }}></div>
                <div style={{marginTop: 50, color: this.state.color}}>
                 <h3> ColorID: {this.state.color} 
                 <br/>
                 TokenId: {this.state.id}
                 <br/>
                 Owner Of TOKEN: {this.state.owner}
                 </h3>
                </div>
              </div>        
       
                )
         }       
        </>
    );
}
}

export default Detail;