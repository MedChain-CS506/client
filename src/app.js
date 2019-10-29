const Web3 = require('web3');
const web3 = new Web3()

async function initWeb3(params) {
   if (window.ethereum) {
       web3Provider = window.ethereum;
       try {
           // Request account access
           await window.ethereum.enable();
       } catch (error) {
           // User denied account access...
           console.error("User denied account access")
       }
   }
   // Legacy dapp browsers...
   else if (window.web3) {
       web3Provider = window.web3.currentProvider;
   }
   // If no injected web3 instance is detected, fall back to Ganache
   else {
       web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
   }
   return initContract();
}

function initContract() {
   // Get the necessary contract artifact file and instantiate it with truffle-contract
   var med_chain_artifact = {};
   $.getJSON('./med_chain.json', function (data){
     med_chain_artifact = data;
    // console.log(med_chain_artifact);
     console.log(med_chain_artifact);
    med_chain_contract = TruffleContract(med_chain_artifact);
    med_chain_contract.setProvider(web3Provider);
    med_chain_contract_instance = med_chain_contract.at('0x73bDA4F8BC5d18590333f21378BaE953A49b8b85')
    console.log(med_chain_contract);
   }); 
   
   // Set the provider for our contract
   // Use our contract to retrieve and mark the adopted pets
};
function add_paitent() {
   var add_paitent_instance;
   var temp = web3.toAscii("Name");
   var samplePatient = {
       aadhaar: 19,
       age: 20,
       name: temp,
       dob: temp,
       weight: 100,
       allergies: temp
   };
   web3.eth.getAccounts(function (error, accounts) {
       if (error) {
           console.log(error);
       }
       var account = accounts[0];
       contracts.med_chain.deployed().then(function (instance) {
           add_paitent_instance = instance;
           // Execute adopt as a transaction by sending account
           return add_paitent_instance.add_paitent(samplePatient.aadhaar, samplePatient.age, samplePatient.name,
               samplePatient.dob, samplePatient.weight, samplePatient.allergies, {
                   from: account
               });
       }).then(function (result) {
           return add_paitent();
       }).catch(function (err) {
           console.log(err.message);
       });
   });
}
$(function () {
   $(window).on("load", function () {
       initWeb3();
   });
});