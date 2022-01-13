pragma solidity ^0.4.17.0;


contract CampaignFactory{
    address[] public deployedCampaigns;

    function createCampaign (uint minimum) public{
    address newCampaign=new Campaign(minimum,msg.sender);
    deployedCampaigns.push(newCampaign);
    }

    function getCreatedCampaignList() public view returns(address[]) {
        return deployedCampaigns;
    }
}

contract Campaign{

    struct Request{
        string description;
        uint value;
        address recipient;
        bool compelete;
        mapping(address=>bool) approvals;
        uint approvalCount;

    }

    address public manager;
    uint public minimumContribution;
    mapping(address=>bool) approvers;

    //for mapping you will not get the list of data that is available in the mapping.
    //for that will create new variable that will store the value of count.

    //Mapping does not allow you t o do iteration,you just need to pass the key,you will get the value.
    //need to define data type and its default value as number or not bool.

    Request[] public requests;

    uint public approversCount;


        modifier onCallByManager(){
        require(manager== msg.sender);
        _;
    }

    function Campaign(uint minimum,address creator) public{
        manager=creator;
        minimumContribution=minimum;
    }

    function contribute() public payable{
        require(msg.value > minimumContribution );
        approvers[msg.sender]=true;
        approversCount++;
 
    }

    function createRequests(string description, uint value,address recipient) public onCallByManager{
        Request memory newRequest=Request({
            description:description,
            value:value,
            recipient:recipient,
            compelete:false,
            approvalCount:0

        });
        requests.push(newRequest);

    }

    function approveRequests(uint index) public{
        require(approvers[msg.sender]);
        require(!requests[index].approvals[msg.sender]);
        requests[index].approvals[msg.sender]=true;
        requests[index].approvalCount++;
    }

    function finalizeRequest(uint index) public onCallByManager{

        require(requests[index].approvalCount>(approversCount/2));
        require(!requests[index].compelete);
      
        requests[index].recipient.transfer(requests[index].value);

        requests[index].compelete=true;
    }

      function getSummary() public view returns(uint,uint,uint,uint,address){
        return (
            minimumContribution,
            this.balance,
            requests.length,
            approversCount,
            manager   
        );

    }

    function getRequestsCount() public view returns(uint){
        return requests.length;
        
    }
    
    function getAllRequests() public view returns(Request[])
    {
        return requests;
    }


}