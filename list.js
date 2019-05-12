const Web3 = require('web3');

/***
let USER = "u0c0ftpukm";
let PASS = "dGmqQxSa7Oab7XDF93eVgf0R4wOR7R4MUbOq1YI8AKA";
let RPC_ENDPOINT = "u0hypkfkj9-u0rgnf050w-rpc.us0-aws.kaleido.io"; // Remove the leading https://
***/
let USER = "u0ojinnyf1";
let PASS = "SiivBcpjMLjL-NHE2R4GnVHPs8EJvyvTgo-z_1IwiD0";
let RPC_ENDPOINT = "u0hypkfkj9-u0rgnf050w-rpc.us0-aws.kaleido.io";

// HTTP Provider Example
// NOTE: The HTTP Provider is deprecated, as it won't work for subscriptions.
// See: https://web3js.readthedocs.io/en/1.0/web3.html#providers

let nodeUrl = "https://" + USER + ":" + PASS + "@" + RPC_ENDPOINT;

let provider = new Web3.providers.HttpProvider(nodeUrl);
let web3 = new Web3(provider);

// Now you can call web3 functions, so we'll just test the connection by getting the latest block in the chain.

/***
web3.eth.getAccounts().then((accounts) => {
	console.log(accounts)
	//console.log(web3.eth.accounts[0])
});
***/

//console.log(web3.eth.accounts);
//console.log(web3.eth.accounts[0]);
var accounts = web3.eth.accounts;
//console.log(accounts);

/***
var account="";
var balance = web3.eth.getBalance(process.env.ACCOUNT, function (error, result) {
    if (!error) {
	console.log(web3.utils.fromWei(new BigNumber(result), 'ether'));
    } else {
      console.error(error);
    }
  });
***/

//web3.eth.getTransaction("0x6c2135c..");

//var contents = web3.utils.toAscii("0x26dd860a0000000000000000000000003a8548a03103c0721592bf1061c10ee0da07dcbd0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000035347540000000000000000000000000000000000000000000000000000000000");
//var contents = web3.utils.hexToUtf8("0x26dd860a0000000000000000000000003a8548a03103c0721592bf1061c10ee0da07dcbd0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000035347540000000000000000000000000000000000000000000000000000000000");
//console.log(contents);
//var contents = web3.utils.hexToString("0x26dd860a0000000000000000000000003a8548a03103c0721592bf1061c10ee0da07dcbd0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000035347540000000000000000000000000000000000000000000000000000000000");
var contents = web3.utils.hexToAscii("0x26dd860a0000000000000000000000003a8548a03103c0721592bf1061c10ee0da07dcbd0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000035347540000000000000000000000000000000000000000000000000000000000");
console.log(contents);
//var contents2 = web3.utils.toAscii(contents)
//console.log(contents2);

//web3.eth.getBalance("0x3Dd1e2B16BE49bD07857facc0A791dceA8F97531").then(console.log);
var ba1_account = "0x3Dd1e2B16BE49bD07857facc0A791dceA8F97531";
web3.eth.getBalance(ba1_account, (err, wei) => {
  balance = web3.utils.fromWei(wei, 'ether');
		console.log("Balance = ", balance);
})


/*** now get list of art from smart contract that created them ***/
const abi = [{"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"finishMinting","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_releaseTime","type":"uint256"}],"name":"mintTimelocked","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}];
const address = "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07"; // FIXME
const contract = new web3.eth.Contract(abi, address);

contract.methods.totalSupply().call((err, result) => { console.log(result) })
contract.methods.name().call((err, result) => { console.log(result) })
contract.methods.symbol().call((err, result) => { console.log(result) })
contract.methods.balanceOf('0xd26114cd6EE289AccF82350c8d8487fedB8A0C07').call((err, result) => { console.log(result) })



web3.eth.getBlock("latest").then((latestBlock) => {
    console.log("Latest Block Via HTTP Provider: ")
    console.log(latestBlock);
    // Stop the program once this has finished
    process.exit();
});

