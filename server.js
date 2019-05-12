const express = require('express');
//web3 add
const Web3 = require('web3')

let USER = "u0ojinnyf1";
let PASS = "SiivBcpjMLjL-NHE2R4GnVHPs8EJvyvTgo-z_1IwiD0";
let RPC_ENDPOINT = "u0hypkfkj9-u0rgnf050w-rpc.us0-aws.kaleido.io";

// HTTP Provider Example
// NOTE: The HTTP Provider is deprecated, as it won't work for subscriptions.
// See: https://web3js.readthedocs.io/en/1.0/web3.html#providers

let nodeUrl = "https://" + USER + ":" + PASS + "@" + RPC_ENDPOINT;

let provider = new Web3.providers.HttpProvider(nodeUrl);
const web3 = new Web3(provider);

// Now you can call web3 functions, so we'll just test the connection by getting the latest block in the chain.

/*** now get list of art from smart contract that created them ***/
const abi = JSON.parse('[{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"x","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contractOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"type":"constructor"}]')
const contractAddress = '0xd26114cd6EE289AccF82350c8d8487fedB8A0C07'; // FIXME
//const NFTContract = web3.eth.contract(abi);
//const contract = NFTContract.at(contractAddress);
const contract = new web3.eth.Contract(abi, contractAddress);


//contract.methods.totalSupply().call((err, result) => { console.log(result) })
//contract.methods.name().call((err, result) => { console.log(result) })
//contract.methods.symbol().call((err, result) => { console.log(result) })
//contract.methods.balanceOf('0xd26114cd6EE289AccF82350c8d8487fedB8A0C07').call((err, result) => { console.log(result) })

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/api/myartlist', (req, res) => {
  res.json([{ 
		title: 'blockchain stuff',
		artist: 'Andy Blockchain',
		creationDate: '10 May 2019',
		timestamp: '',
		media: 'digital',
		description: 'Really nice outsider art of a digitial nature',
		assetAddress: '0x???'
  }]);
});

app.get('/api/artlistforsale', (req, res) => {
  res.json([
	  { 
	  	title: 'Blockchain Art 01',
	  	artist: 'Andy Chainblock',
	  	creationDate: '01 May 2019',
	  	timestamp: '',
	  	media: 'digital',
	  	description: 'Really nice outsider art of a digitial nature 01',
		  assetAddress: '0x???',
		  sellerAddress: '0x???'
    },
	  { 
	  	title: 'Blockchain Art 02',
	  	artist: 'Andy Chainblock',
	  	creationDate: '02 May 2019',
	  	timestamp: '',
	  	media: 'digital',
	  	description: 'Really nice outsider art of a digitial nature 02',
		  assetAddress: '0x???',
		  sellerAddress: '0x???'
    },
	  { 
	  	title: 'Blockchain Art 03',
	  	artist: 'Andy Chainblock',
	  	creationDate: '03 May 2019',
	  	timestamp: '',
	  	media: 'digital',
	  	description: 'Really nice outsider art of a digitial nature 03',
		  assetAddress: '0x???',
		  sellerAddress: '0x???'
    },
	  { 
	  	title: 'Blockchain Art 04',
	  	artist: 'Andy Chainblock',
	  	creationDate: '04 May 2019',
	  	timestamp: '',
	  	media: 'digital',
	  	description: 'Really nice outsider art of a digitial nature 04',
		  assetAddress: '0x???',
		  sellerAddress: '0x???'
    },
	  { 
	  	title: 'Blockchain Art 05',
	  	artist: 'Andy Chainblock',
	  	creationDate: '05 May 2019',
	  	timestamp: '',
	  	media: 'digital',
	  	description: 'Really nice outsider art of a digitial nature 05',
		  assetAddress: '0x???',
		  sellerAddress: '0x???'
    },
	  { 
	  	title: 'Blockchain Art 06',
	  	artist: 'Andy Chainblock',
	  	creationDate: '06 May 2019',
	  	timestamp: '',
	  	media: 'digital',
	  	description: 'Really nice outsider art of a digitial nature 06',
		  assetAddress: '0x???',
		  sellerAddress: '0x???'
    },
	  { 
	  	title: 'Blockchain Art 07',
	  	artist: 'Andy Chainblock',
	  	creationDate: '07 May 2019',
	  	timestamp: '',
	  	media: 'digital',
	  	description: 'Really nice outsider art of a digitial nature 07',
		  assetAddress: '0x???',
		  sellerAddress: '0x???'
    },
	  { 
	  	title: 'Blockchain Art 08',
	  	artist: 'Andy Chainblock',
	  	creationDate: '08 May 2019',
	  	timestamp: '',
	  	media: 'digital',
	  	description: 'Really nice outsider art of a digitial nature 08',
		  assetAddress: '0x???',
		  sellerAddress: '0x???'
    }
	]);
});

/***
app.get('/api/candidate/:name', (req, res) => {
  let val = contract.totalVotesFor.call('Nick').toString();
  res.send({ express: "Candidate Name: " + req.params.name });
});

app.get('/api/votes/:name', (req, res) => {
  let val = contract.totalVotesFor.call(req.params.name).toString();
  res.send({ express: "Candidate Name: " + req.params.name + " Votes: " + val });
});
***/``

app.listen(port, () => console.log(`Listening on port ${port}`));
