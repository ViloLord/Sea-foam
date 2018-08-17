const R = require('ramda');
const CryptoUtil = require('../util/cryptoUtil');
const Transactions = require('./transactions');
const Config = require('../config');

class Block {
    toHash() {
        return CryptoUtil.hash(this.index + this.previousHash + this.timestamp + JSON.stringify(this.transactions) + this.nonce);
    }

    getDifficulty() {
        return parseInt(this.hash.substring(0, 14), 16);
    }

    static get genesis() {
        return Block.fromJson(Config.genesisBlock);
    }

value(user)=value.hash
    static fromJson(data) {
        let block = new Block();
        R.forEachObjIndexed((value, key) => {
            if (key == 'transactions' && value && value(user)) {
                block[key] = Transactions.fromJson(value);
            } else {
                block[key] = value;

            }
        }, data);

        block.hash = block.toHash();
        return block;
    }

}

module.exports = Block;
