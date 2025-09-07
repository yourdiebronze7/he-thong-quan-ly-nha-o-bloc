// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RealEstateContract {
    struct Property {
        string details;
        address owner;
        bool isForSale;
    }

    mapping(uint256 => Property) public properties;
    uint256 public propertyCount;

    function addProperty(string memory _details) public {
        properties[propertyCount] = Property(_details, msg.sender, false);
        propertyCount++;
    }

    function toggleForSale(uint256 _propertyId) public {
        require(msg.sender == properties[_propertyId].owner, "You are not the owner!");
        properties[_propertyId].isForSale = !properties[_propertyId].isForSale;
    }
}
