const express = require('express');
const router = express.Router();
require('dotenv').config();
const Web3 = require('web3');
const MyContract = require('../build/contracts/Color.json');
const HDWalletProvider = require('truffle-hdwallet-provider');
const Controller = require('../controller/controller');

var Contract;
var acc;
var web3;
const contractAddress = "0xeA3922ab088572a421E479A7c0082A601cc870c2";
const run = async() =>{
     
    const provider =  new HDWalletProvider(process.env.MNEMONIC, `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,0,6)
    web3 = new Web3(provider);
    const networkId = await web3.eth.net.getId();
     acc = await web3.eth.getAccounts();
     

    Contract = new web3.eth.Contract(
        MyContract.abi,
        MyContract.networks[networkId].address
    );
    exports.Contract = Contract;
    exports.acc = acc;
    exports.web3 = web3;

    
}

run().then(function(){
    console.log(acc);
})


router.get('/', (req,res) =>{
    //init();
    res.send("Hello, Welcome to the ERC721 restfull api");

    });
        
    router.post('/totalSupply', Controller.totalSupply);
    router.post('/name', Controller.name);
    router.post('/symbol', Controller.symbol);
    router.post('/approve', Controller.approve);
    router.post('/mint', Controller.mint);
    router.post('/safeTransferFrom', Controller.safeTransferFrom);
    router.post('/setApprovalForAll', Controller.setApprovalForAll);
    router.post('/setTokenURI', Controller.setTokenURI);
    router.post('/transferFrom', Controller.transferFrom);
    router.post('/balanceOf', Controller.balanceOf);
    router.post('/colors', Controller.colors);
    router.post('/getApproved', Controller.getApproved);
    router.post('/isApprovedForAll', Controller.isApprovedForAll);
    router.post('/ownerOf', Controller.ownerOf);
    router.post('/tokenByIndex', Controller.tokenByIndex);
    router.post('/tokenOfOwnerByIndex', Controller.tokenOfOwnerByIndex);
    router.post('/tokenURI', Controller.tokenURI);


 
     
module.exports = router;