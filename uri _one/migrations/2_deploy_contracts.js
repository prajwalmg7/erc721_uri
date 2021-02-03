const sptkn = artifacts.require("sptkn");
module.exports = function(deployer) {
  deployer.deploy(sptkn);
};