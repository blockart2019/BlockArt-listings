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

web3.eth.getBalance("0x3Dd1e2B16BE49bD07857facc0A791dceA8F97531").then(console.log);

web3.eth.getBlock("latest").then((latestBlock) => {
    console.log("Latest Block Via HTTP Provider: ")
    console.log(latestBlock);
    // Stop the program once this has finished
    process.exit();
});

