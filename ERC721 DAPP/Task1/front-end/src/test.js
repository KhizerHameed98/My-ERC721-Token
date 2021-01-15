import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Axios from "axios";
import Swal from "sweetalert2";


function Test(){

    useEffect(() => {
       loadBlockchainData();
    }, [])

    const [colorInput, setColorInput] = useState("");
    const [totalSupply, setTotalSupply] = useState("");
    const [colors, setColors] = useState([]);
    const [status, setStatus] = useState(false);

    const loadBlockchainData=() =>{
        Axios.post('http://localhost:5000/totalSupply').then((response) =>{
            setTotalSupply(response.data);
            let promiseArr=[];
            let promiseId=[];
            //let color=[];

            for(let i=0;i<response.data;i++){
                promiseArr.push(
                    Axios.post('http://localhost:5000/colors',{index:i})
                )
                promiseId.push(
                    Axios.post('http://localhost:5000/tokenByIndex',{index:i})

                )
            }
            

            Promise.all(promiseArr).then(response=>{

                let colorsTxt = response.map((item,index)=>item.data);
                 
                console.log("text===",colorsTxt)

                Promise.all(promiseId).then((response) =>{
                    let color = response.map((item,index)=>{
                        return{
                            id: item.data,
                            colorText: colorsTxt[index]
                        }
                    })

                    setColors(color); 
                    setStatus(true);
                })
   
            })
        
    })
        }

       const mint = () =>{
  
            Axios.post('http://localhost:5000/mint',{
              color: colorInput,
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
    return(

        <>
{
    (
        status &&
        <MDBContainer>
        <div style={{marginTop:70}}>
        
        <MDBCol md="12">
          <div>
            <p className="h1 text-center mb-4">Issue Token</p>
            
            <div className="col-md-12">
            <input
                    type='text'
                    className='form-control text-center'
                    style={{width:500, marginLeft: 300, marginTop:10}}
                    placeholder='e.g. #FFFFFF'
                    onChange = {(e) =>{
                        setColorInput(e.target.value);
                    }}
                  />

            </div>
            <div className="col-md-12">
            <button style={{width:250, marginLeft: 410, marginTop:30, marginBottom:20}}
                    className='btn btn-block btn-success' onClick={mint}>
                        MINT
         </button>
         
            </div>
              
              
            </div>
        </MDBCol>
        <div className="row text-center mb-5 mt-5" >
            
            { colors.map((color, key) => {
              return(
                <div key={key} className="col-md-4 mb-4">
                  <div className="token" style={{ backgroundColor: color.colorText }}></div>
                  <div>
                     <h5>
                    
                     {/* {`${color.color} ${color.id}`} */}
                     Color Id: {color.colorText}
                     <br />
                     <Link to={{pathname:"/detail",state:{color}}}>
                     TokenId : {color.id}
                  </Link>
                     </h5>
                
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
    )
}

export default Test

