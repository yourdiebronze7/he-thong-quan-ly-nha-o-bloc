const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');

const provider = new HDWalletProvider(
    'YOUR_MNEMONIC',
    'https://eth-rinkeby.alchemyapi.io/v2/YOUR_ALCHEMY_API_KEY'
);
const web3 = new Web3(provider);

module.exports = {
    networks: {
        development: {
            host: '127.0.0.1',
            port: 7545,
            network_id: '*',
        },
        kovan: {
            provider: () => provider,
            network_id: 42,
            gas: 5000000,
            gasPrice: 20000000000 // Setting gas price to 20 Gwei
        },
    },
    compilers: {
        solc: {
            version: '^0.8.0',
        },
    },
};