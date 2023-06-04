// SPDX-License-Identifier: UNLICENSED LICENSED
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";


contract FakeTokenMarketPlace is  ERC1155 {
    
    /// @dev Maintain a mapping of Fake TokenID to Owner addresses
    mapping(uint256 => address) public tokens;
    /// @dev Set the purchase price for each Fake Token
    uint256 tokenPrice = 0.01 ether;

    // max number of GNIENFT's
    uint256 public _maxTokenIds = 2000000 ;


constructor ( address _fakeTokenMarketPlace ) ERC1155("GNIE", "GNIE") {
    _maxTokenIds = _GNIENFT ; 
}
     
    /// @dev purchase() accepts ETH and marks the owner of the given tokenId as the caller address
    /// @param _tokenId - the fake token Id to purchase
    function purchase(uint256 _tokenId) external payable {
        require(msg.value == tokenPrice, "This Token costs 0.01 ether");
        tokens[_tokenId] = msg.sender;
    }
    
    /// @dev getPrice() returns the price of one 
    function getPrice() external view returns (uint256) {

       return tokenPrice;
    }
   
    /// @dev available() checks whether the given tokenId has already been sold or not
    /// @param _tokenId - the tokenId to check for
    function available(uint256 _tokenId) external view returns (bool) {
        // address(0) = 0x0000000000000000000000000000000000000000
        // This is the default value for addresses in Solidity
        if (tokens[_tokenId] == address(0)) {
            return true;
        }
        return false;
    }
  }
