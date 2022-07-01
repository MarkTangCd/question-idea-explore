pragma solidity ^0.5.0;

contract Adoption {
  address[16] public adopters; // 保存领养者地址

  // 领养宠物
  function adopt(uint petId) public returns (uint) {
    require(petId >= 0 && petId <= 15); // 确保id在数组长度内

    adopters[petId] = msg.sender; // 保存调用地址
    return petId;
  }

  // 返回领养者
  function getAdopters() public view returns (address[16] memory) {
    return adopters;
  }
}