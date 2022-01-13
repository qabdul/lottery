pragma solidity ^0.4.17.0;

contract Lottery{

    // Whenever we are callling this contract using the transaction or call function, it will give you the sender addesss,
    //msg is gloal varibale that  is availbe to whole contract!!!

    address public manager;
    address[] public players;
    uint public winner;

    function Lottery() public{
        manager=msg.sender;
    }


    //When function call player needs to send ether(using function type as payable) and we will get the address using mes global object.
    function enter() public payable{
        require(msg.value > 0.1 ether);
        players.push(msg.sender);
    }

    //NOw people will enter in your lottery application , now manager will pick up winnner among the winnner and he will send the money to that player
    //but in solidity it is very difficult to find random unlike we do in normal javascript,
    //So we are going to create Pesudo Random number that will influence like a random number,
    //for that first we need to generate random hexa decimal and then convert into integer.

    // for that will create Random function which is jhaving function type as private :ie we cannot see that function in Remijx UI.


    function random() private view returns(uint){
        return uint(keccak256(block.difficulty,now,players));
    }

    //Above function is not secure, becauase it is very easy to find block difficulty and the current time.

    //Now we need to pick a winnner.
    //random()% players.length will gives us randonw arrray index....so that person will be the winner.

    function pickWinner() public onlyMangerCall {

        // require(manager == msg.sender);
        winner=random() % players.length;
        
        //it will give us the index number.
        players[winner].transfer(this.balance);

        //transfer is availble to all addresss, this referes to currrent contract and send all balance to that winner!!!!.

        players=new address[](0);

        //It will reset again back to initial condtion!!!

    }

    //function modifiers allow us to do the modular approach.

    modifier onlyMangerCall(){
        
        require(manager == msg.sender);
        _;

    }

    // Return all the register players


    function getAllPlayers() public view returns(address[]){
        return players;
    }

  

}