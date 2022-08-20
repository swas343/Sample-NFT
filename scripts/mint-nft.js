require("dotenv").config();
const pdf2base64 = require("pdf-to-base64");
const API_URL = process.env.API_URL;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const alchemyWeb3 = createAlchemyWeb3(API_URL);
const contract = require("../artifacts/contracts/pdfNft.sol/PdfNFT.json");
const contractAddress = "0x64f085E9dCd0816b4BB7ED33a10253ba67Bb3933";
const nftContract = new alchemyWeb3.eth.Contract(contract.abi, contractAddress);

const METAMASK_PUBLIC_KEY = process.env.METAMASK_PUBLIC_KEY;
const METAMASK_PRIVATE_KEY = process.env.METAMASK_PRIVATE_KEY;

async function mintNFT(tokenURI) {
  // get the nonce - nonce is needed for security reasons. It keeps track of the number of
  // transactions sent from our address and prevents replay attacks.
  const nonce = await alchemyWeb3.eth.getTransactionCount(
    METAMASK_PUBLIC_KEY,
    "latest"
  );
  const gasLimit = process.env.GAS_LIMIT;

  const tx = {
    from: METAMASK_PUBLIC_KEY, // our MetaMask public key
    to: contractAddress, // the smart contract address we want to interact with
    nonce: nonce, // nonce with the no of transactions from our account
    gas: gasLimit, //1000000, // fee estimate to complete the transaction
    data: nftContract.methods
      .createNFT("0xDf57AC166543b4884f2b1e8f22749DB7A04EECa5", tokenURI) // metamask address of recipient
      .encodeABI(), // call the createNFT function from our OsunRiverNFT.sol file and pass the account that should receive the minted NFT.
  };

  const signPromise = alchemyWeb3.eth.accounts.signTransaction(
    tx,
    METAMASK_PRIVATE_KEY
  );
  signPromise
    .then((signedTx) => {
      alchemyWeb3.eth.sendSignedTransaction(
        signedTx.rawTransaction,
        function (err, hash) {
          if (!err) {
            console.log(
              "The hash of our transaction is: ",
              hash,
              "\nCheck Alchemy's Mempool to view the status of our transaction!"
            );
          } else {
            console.log(
              "Something went wrong when submitting our transaction:",
              err
            );
          }
        }
      );
    })
    .catch((err) => {
      console.log(" Promise failed:", err);
    });
}

function getBase64(file) {
  pdf2base64(file)
    .then((response) => {
      // console.log(response);
      // return response;
      mintNFT(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

getBase64("assets/sample40.pdf");
// mintNFT("https://ipfs.io/ipfs/QmY5pEiizz1imRr4pnGj76136uCad7tByScoirs1b5KbT6");
