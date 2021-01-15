var main = require('../routes/mainRoute');



exports.totalSupply = async(req,res) =>{
    res.json(await main.Contract.methods.totalSupply().call());
}



exports.approve = async(req,res) =>{
    res.send(await main.Contract.methods.approve(req.body.to, req.body.tokenId).send({from: main.acc[0]}));
}



exports.mint = async(req,res) =>{
    
    res.send(await main.Contract.methods.mint(req.body.color).send({from: main.acc[0]}));
}



exports.safeTransferFrom = async(req,res) =>{
    res.send(await main.Contract.methods.safeTransferFrom(req.body.from,req.body.to,req.body.tokenId ).send({from: main.acc[0]}));
}




exports.safeTransferFrom = async(req,res) =>{
    res.send(await main.Contract.methods.safeTransferFrom(req.body.from,req.body.to,req.body.tokenId,req.body._data ).send({from:main.acc[0]}));
}



exports.setApprovalForAll= async(req,res) =>{
    res.send(await main.Contract.methods.setApprovalForAll(req.body.operator, req.body.approved).send({from:main.acc[0]}));
}



exports.setTokenURI= async(req,res) =>{
    res.send(await main.Contract.methods.setTokenURI(req.body.tokenId, req.body._tokenURI).send({from:main.acc[0]}));
}


exports.transferFrom= async(req,res) =>{
    res.send(await main.Contract.methods.transferFrom(req.body.from, req.body.to, req.body.tokenId).send({from: main.acc[0]}));
}

exports.balanceOf= async(req,res) =>{
    res.send(await main.Contract.methods.balanceOf(req.body.owner).call());
}



exports.colors= async(req,res) =>{
    res.send(await main.Contract.methods.colors(req.body.index).call());
}



exports.getApproved= async(req,res) =>{
    res.send(await main.Contract.methods.getApproved(req.body.tokenId).call());
}



exports.isApprovedForAll= async(req,res) =>{
    res.send(await main.Contract.methods.isApprovedForAll(req.body.owner, req.body.operator).call());

}



exports.name= async(req,res) =>{
    res.send(await main.Contract.methods.name().call());

}



exports.symbol= async(req,res) =>{
    res.send(await main.Contract.methods.symbol().call());

}



exports.ownerOf = async(req,res) =>{
    res.send(await main.Contract.methods.ownerOf(req.body.tokenId).call());
}



exports.tokenByIndex= async(req,res) =>{
    res.send(await main.Contract.methods.tokenByIndex(req.body.index).call());
}


exports.tokenOfOwnerByIndex= async(req,res) =>{
    res.send(await main.Contract.methods.tokenOfOwnerByIndex(req.body.owner, req.body.index).call());
}



exports.tokenURI= async(req,res) =>{
    res.send(await main.Contract.methods.tokenURI(req.body.tokenId).call());
}






