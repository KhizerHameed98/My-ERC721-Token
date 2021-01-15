import React, {Component} from 'react';
import { Link } from 'react-router-dom';


import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Axios from "axios";
import Swal from "sweetalert2";



class Home extends Component {
  constructor(props){
    super(props);
  }
  state = {
    colors:[],
    totalSupply: 0,
    colorInput: '',
    check: false,
  };

 
  
async componentDidMount(){
  await this.loadBlockchainData();
  
  

}


mint = (color) =>{
  
  Axios.post('http://localhost:5000/mint',{
    color: color,
  }).then((response) =>{
    if(response.statusText =="OK"){
      Swal.fire(
        "Minted Successfully",
        'Please Refresh the Page to see Your Asset',
        'success'
      )  

    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
      

    }

  })
 }
   loadBlockchainData=async()=>{
    
    Axios.post('http://localhost:5000/totalSupply').then((response) =>{

      let a = parseInt(response.data.toString());
     
    for (let i =0 ; i<=a; i++){
      if(i==a){
        this.setState({
          check : true
        })
      }
      else {
        Axios.post('http://localhost:5000/colors',{
        index: i,
      }).then((response) =>{
        let colorObj={};

        colorObj.color = response.data;
        // colorObj.id= i;
        Axios.post('http://localhost:5000/tokenByIndex',{
          index: i
        }).then((response) =>{
          console.log(response.data);
          colorObj.id = response.data;
          this.setState({
          colors:[...this.state.colors,colorObj]
        })
        })
        
      })
      }
    }
      
    });

    
  };

  render(){
  return (
    
    
    <>
    {
      (this.state.check && 
        <MDBContainer>
        <div style={{marginTop:70}}>
        
        <MDBCol md="12">
          <div>
            <p className="h1 text-center mb-4">Issue Token</p>
            
            <form onSubmit={(event) => {
                  event.preventDefault()
                  const color = this.colorInput.value
                  this.mint(color)
                }}>
                  <input
                    type='text'
                    className='form-control text-center'
                    style={{width:500, marginLeft: 300, marginTop:10}}
                    placeholder='e.g. #FFFFFF'
                    ref={(input) => { this.colorInput = input }}
                  />
                  <input style={{width:250, marginLeft: 410, marginTop:30, marginBottom:20}}
                    type='submit'
                    className='btn btn-block btn-primary'
                    value='MINT'
                  />
                </form>
              
              
            </div>
        </MDBCol>

           <div className="row text-center mb-5 mt-5">
            { this.state.colors.map((color, key) => {
              return(
                <div key={key} className="col-md-3 mb-3">
                  <div className="token" style={{ backgroundColor: color.color }}></div>
                  <div>
                    <Link to={{pathname:"/detail",state:{color}}}>
                     {/* {`${color.color} ${color.id}`} */}
                     Color Id: {color.color}
                     <br />
                     TokenId : {color.id}
                  </Link>
                  </div>
                </div>
              )
            })}
          </div>
    
            
        </div>
        </MDBContainer>
      ) 
}
    </>
  );
  }
}

export default Home;
