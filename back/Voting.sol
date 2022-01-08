pragma solidity ^0.4.11;
// specifies what version of compiler this code will be compiled with

contract Voting {
  /* the mapping field below is equivalent to an associative array or hash.
  */

  mapping (bytes32 => uint8) public votesReceived;

  /* Solidity doesn't let you pass in an array of strings in the constructor (yet).
  We will use an array of bytes32 instead to store the list of Medcines
  */

  bytes32[] public MedcineNames;

  /* This is the constructor which will be called once and only once - when you
  deploy the contract to the blockchain. When we deploy the contract,
  we will pass an array of Medcines who will be contesting in the election
  */
   constructor() {
    MedcineNames=new bytes32[](10);
  }
  function newProduct(bytes32 Medcine)public returns (bool)
  {
    MedcineNames.push(Medcine);
    return true;
  }
  // This function returns the total votes a Medcine has received so far
 function totalVotesFor(bytes32 Medcine) public returns (uint8) {
    assert(validMedcine(Medcine) == true);
    return votesReceived[Medcine];
  }
 function stringToBytes32(string memory source) public pure returns (bytes32 result) {
    bytes memory tempEmptyStringTest = bytes(source);
    if (tempEmptyStringTest.length == 0) {
        return 0x0;
    }

    assembly {
        result := mload(add(source, 32))
    }
}  

  // This function increments the vote count for the specified Medcine. This
  // is equivalent to casting a vote
   function voteForMedcine(bytes32 Medcine)public {
    assert(validMedcine(Medcine) == true);
    votesReceived[Medcine] += 1;
  }

   function validMedcine(bytes32 Medcine) public returns (bool) {
    for(uint i = 0; i < MedcineNames.length; i++) {
      if (MedcineNames[i] == Medcine) {
        return true;
      }
    }
    return false;
  }
}