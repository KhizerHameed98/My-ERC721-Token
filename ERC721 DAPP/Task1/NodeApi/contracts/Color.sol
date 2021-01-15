// SPDX-License-Identifier: MIT

pragma solidity ^0.6.12;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";



contract Color is ERC721 {
  string[] public colors;
  mapping(string => bool) _colorExists;

  constructor() ERC721("Color", "COLOR") public {
  }


  // E.G. color = "#FFFFFF"
  function mint(string memory _color) public {
    require(!_colorExists[_color]);
    colors.push(_color);
    uint id = colors.length;
    
    _mint(msg.sender, id);
    _colorExists[_color] = true;
  }
    function setTokenURI(uint256 tokenId, string memory _tokenURI) public {
     _setTokenURI( tokenId,_tokenURI) ;

        
}
}
