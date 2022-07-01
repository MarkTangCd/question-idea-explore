pragma solidity ^0.5.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Adoption.sol";

contract TestAdoption {
  Adoption adoption = Adoption(DeployedAddresses.Adoption());

  // 领养测试用例
  function testUserCanAdoptPet() public {
    uint returnedId = adoption.adopt(8);

    uint expected = 8;
    Assert.equal(returnedId, expected, "Adoption of pet ID 8 should be recorded.");
  }

  // 宠物所有者测试用例
  function testGetAdopterAddressByPetId() public {
    // 期望领养者的地址就是本合约地址，因为交易是由测试合约发起交易，
    address expected = address(this);
    address adopter = adoption.adopters(8);
    Assert.equal(adopter, expected, "Owner of pet ID 8 should be recorded.");
  }

    // 测试所有领养者
  function testGetAdopterAddressByPetIdInArray() public {
  // 领养者的地址就是本合约地址
    address expected = address(this);
    address[16] memory adopters = adoption.getAdopters();
    Assert.equal(adopters[8], expected, "Owner of pet ID 8 should be recorded.");
  }
}