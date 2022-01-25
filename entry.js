const bcrypt = require('bcrypt') //import the bcrypt library

class Block{
    constructor(blockid, previousHash, data) {
        this.blockid = blockid;
        this.timestamp = Date.now();
        this.blockhash = this.getHash();
        this.previousHash = previousHash;
        this.data = data;
        this.nonce = 0;
    }

    getHash() {
        //this method is used to hash the data in the block using a salt of 10 and return the hash
        return SHA256(this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce);
    }

    mine(difficulty) {
        while (!this.hash.startsWith(Array(difficulty + 1 ). join('0'))) {
            this.nonce++;
            this.hash = this.getHash();
        }
    }
}

class BlockChain {
    constructor() {
        //a block chain is a series of blocks, hence we need an array
        this.chain = [];
    }
    /*
    Adding new block
    */

    addBlock(data) {
        let blockid = this.chain.length
        let previousHash = this.chain.length != 0 ? this.chahin[this.chain.length - 1].blockhash : '';
        let block = new Block(blockid, previousHash, data); 
         this.chain.push(block);
    }
    /*
    Get the lastest block
    */
    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }
    /*
    Check validation of the block
    */
   isValid(blockchain = this ) {
       for (let i = 1; i < blockchain.length; i++) {
           const currentBlock = blockchain.chain[i];
           const previousBlock = blockchain.chain [i-1];

           if (currentBlock.hash != currentBlock.getHash() || previousBlock.hash !== currentBlock.previousHash) {
               return false;
           }
       }
       return true;
   }
}

const MyFirstBlockChain = new BlockChain();

MyFirstBlockChain.addBlock({sender:'Nin', receiver: 'Kylo', amount: 10});

console.log(JSON.stringify(MyFirstBlockChain, null, 6));