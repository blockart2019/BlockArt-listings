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
  res.send({ express: 'Hello From BlockArt v 0.1.1' });
});

app.get('/api/myartlist', (req, res) => {
  res.json([{ 
		"title": "Filter",
		"artist": "Josephine Bellini",
		"creationDate": "2017",
		"timestamp": "1557490117",
		"media": "oil on canvas",
		"description": "Bitcoin Filter Protecting from Inflation",
		"assetAddress": "0x???",
		"olContractUrl": "https://u0ykj38k1z:nN9-vf2mTaap3_L_7zuzFYe6D-nsrw_IFJ2ouHlI3y0@u0hypkfkj9-u0n69vd25o-openlaw.us-east-2-svcs.kaleido.io/login",
		"imageFile": "filter.png"
  }]);
});

app.get('/api/artlistforsale', (req, res) => {
  res.json([
	  { 
	  	"title": "Portfolio: Acceptance, Canned, Filter, Nebula",
		  "artist": "Josephine Bellini",
	  	"creationDate": "2018",
	  	"timestamp": "1556712589",
		  "media": "oil on canvas",
	  	"description": "Portfolio: Acceptance, Canned, Filter, Nebula",
			"price": "1000",
			"currency": "ETH",
		  "assetAddress": "0x???",
		  "olContractUrl": "https://u0ykj38k1z:nN9-vf2mTaap3_L_7zuzFYe6D-nsrw_IFJ2ouHlI3y0@u0hypkfkj9-u0n69vd25o-openlaw.us-east-2-svcs.kaleido.io/login",
		  "imageFile": "portfolio.png",
		  "sellerAddress": "0x???"
    },
	  { 
	  	"title": "Digital Currency",
		  "artist": "Pixabay",
	  	"creationDate": "2018",
	  	"timestamp": "1556798989",
	  	"media": "digital",
	  	"description": "Bitcoin as a DIgital Currency",
			"price": "1000",
			"currency": "ETH",
		  "assetAddress": "0x???",
		  "olContractUrl": "https://u0ykj38k1z:nN9-vf2mTaap3_L_7zuzFYe6D-nsrw_IFJ2ouHlI3y0@u0hypkfkj9-u0n69vd25o-openlaw.us-east-2-svcs.kaleido.io/login",
		  "imageFile": "bitcoin-3.jpg",
		  "sellerAddress": "0x???"
    },
	  { 
	  	"title": "Blockchain Crypto Exchange",
		  "artist": "Pixabay",
	  	"creationDate": "2018",
	  	"timestamp": "1556885389",
	  	"media": "digital",
	  	"description": "Blockchain cyrpto exchange",
			"price": "1000",
			"currency": "ETH",
		  "assetAddress": "0x???",
		  "olContractUrl": "https://u0ykj38k1z:nN9-vf2mTaap3_L_7zuzFYe6D-nsrw_IFJ2ouHlI3y0@u0hypkfkj9-u0n69vd25o-openlaw.us-east-2-svcs.kaleido.io/login",
		  "imageFile": "bitcoin-1.jpg",
		  "sellerAddress": "0x???"
    },
	  { 
	  	"title": "Bitcoin Exchange Network",
		  "artist": "Pixabay",
	  	"creationDate": "2018",
	  	"timestamp": "1556971789",
	  	"media": "digital",
	  	"description": "Bitcoin Exchange Network",
			"price": "1000",
			"currency": "ETH",
		  "assetAddress": "0x???",
		  "olContractUrl": "https://u0ykj38k1z:nN9-vf2mTaap3_L_7zuzFYe6D-nsrw_IFJ2ouHlI3y0@u0hypkfkj9-u0n69vd25o-openlaw.us-east-2-svcs.kaleido.io/login",
		  "imageFile": "blockchain.jpg",
		  "sellerAddress": "0x???"
    },
	  { 
	  	"title": "Crypto Business",
		  "artist": "Pixabay",
	  	"creationDate": "2017",
	  	"timestamp": "1557058189",
	  	"media": "digital",
	  	"description": "Crypto Business",
			"price": "1000",
			"currency": "ETH",
		  "assetAddress": "0x???",
		  "olContractUrl": "https://u0ykj38k1z:nN9-vf2mTaap3_L_7zuzFYe6D-nsrw_IFJ2ouHlI3y0@u0hypkfkj9-u0n69vd25o-openlaw.us-east-2-svcs.kaleido.io/login",
		  "imageFile": "crypto-currency.jpg",
		  "sellerAddress": "0x???"
    },
	  { 
	  	"title": "Bitcoin Cryptocurrency",
		  "artist": "Pixabay",
	  	"creationDate": "2018",
	  	"timestamp": "1557058189",
	  	"media": "digital",
	  	"description": "Bitcoin Cryptocurrency",
			"price": "1000",
			"currency": "ETH",
		  "assetAddress": "0x???",
		  "olContractUrl": "https://u0ykj38k1z:nN9-vf2mTaap3_L_7zuzFYe6D-nsrw_IFJ2ouHlI3y0@u0hypkfkj9-u0n69vd25o-openlaw.us-east-2-svcs.kaleido.io/login",
		  "imageFile": "bitcoin-2.jpg",
		  "sellerAddress": "0x???"
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
