pragma solidity ^0.4.11;
// specifies what version of compiler this code will be compiled with

contract Voting {
  /* the mapping field below is equivalent to an associative array or hash.
  */

  mapping (uint8 => uint8) public votesReceived;

  /* Solidity doesn't let you pass in an array of strings in the constructor (yet).
  We will use an array of uint8 instead to store the list of Medcines
  */

  uint8[] public MedcineNames;

  /* This is the constructor which will be called once and only once - when you
  deploy the contract to the blockchain. When we deploy the contract,
  we will pass an array of Medcines who will be contesting in the election
  */
  constructor() {
    MedcineNames=new uint8[](10);
  }
  function newProduct(uint8 Medcine) returns (bool)
  {
    MedcineNames.push(Medcine);
    return true;
  }
  // This function returns the total votes a Medcine has received so far
  function totalVotesFor(uint8 Medcine) returns (uint8) {
    assert(validMedcine(Medcine) == true);
    return votesReceived[Medcine];
  }

  // This function increments the vote count for the specified Medcine. This
  // is equivalent to casting a vote
  function voteForMedcine(uint8 Medcine) {
    assert(validMedcine(Medcine) == true);
    votesReceived[Medcine] += 1;
  }

  function validMedcine(uint8 Medcine) returns (bool) {
    for(uint i = 0; i < MedcineNames.length; i++) {
      if (MedcineNames[i] == Medcine) {
        return true;
      }
    }
    return false;
  }
}