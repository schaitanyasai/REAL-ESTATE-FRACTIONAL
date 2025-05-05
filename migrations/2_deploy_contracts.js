const RealEstateToken = artifacts.require("RealEstateToken");

module.exports = function(deployer) {
  // No parameters needed - constructor takes none
  deployer.deploy(RealEstateToken)
    .then(() => console.log("✅ Contract deployed successfully!"))
    .catch(err => console.error("❌ Deployment failed:", err));
};