pragma solidity ^0.4.11;
// specifies what version of compiler this code will be compiled with

contract Voting {
  /* the mapping field below is equivalent to an associative array or hash.
  */

  mapping (uint8 => uint8) public votesReceived;

  /* Solidity doesn't let you pass in an array of strings in the constructor (yet).
  We will use an array of uint8 instead to store the list of Medicines
  */

  uint8[] public MedicineNames;

  /* This is the constructor which will be called once and only once - when you
  deploy the contract to the blockchain. When we deploy the contract,
  we will pass an array of Medicines who will be contesting in the election
  */
  constructor() {
    MedicineNames=new uint8[](10);
  }
  function newProduct(uint8 Medicine) returns (bool)
  {
    MedicineNames.push(Medicine);
    return true;
  }
  // This function returns the total votes a Medicine has received so far
  function totalVotesFor(uint8 Medicine) returns (uint8) {
    assert(validMedicine(Medicine) == true);
    return votesReceived[Medicine];
  }

  // This function increments the vote count for the specified Medicine. This
  // is equivalent to casting a vote
  function voteForMedicine(uint8 Medicine) {
    assert(validMedicine(Medicine) == true);
    votesReceived[Medicine] += 1;
  }

  function validMedicine(uint8 Medicine) returns (bool) {
    for(uint i = 0; i < MedicineNames.length; i++) {
      if (MedicineNames[i] == Medicine) {
        return true;
      }
    }
    return false;
  }
}