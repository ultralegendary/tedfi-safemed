var myContract = artifacts.require("HelloBlockchain");

module.exports = function(deployer){
  deployer.deploy(myContract,"hello papa");
}