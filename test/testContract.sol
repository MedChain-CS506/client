import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/med_chain.sol";

contract TestContract {
  function testInitialTest() public {
      //address[16] public patientID;
    uint patientID = 0;
    uint zero = 0;

    Assert.equal(zero, patientID, "test ran but it returned false");
    // The address of the med_chain contract to be tested
    //med_chain Med_chain = med_chain(DeployedAddresses.med_chain());
  }

}