require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'jazz enter boil food play razor six pulp harvest person army genius'; 
let testAccounts = [
"0x86d463dd95fa9400bbf54179dd4658fa7eb221544e8151403cd626398ab57f97",
"0xe87a6d837fc1715819c9c1de4e325a98e263f40331130d15065c9716e79e65c1",
"0xc12996199c2b88a759b7fb380aea155e5620300ef05650a426a43b3af5e7ce4b",
"0xf9b9992aa4a972f1c4a9d5f71f7a64c780f95e6c4605ec2b202c7b772539bfec",
"0x9c6ddb023dd76a2aa5996020e8322b9bcbfbd09dd8d683e8fea0a0fdea5347c6",
"0xc2cccf3bca2a9cc89af6189de0eb9874b3e7e7c1f88d9f596532962f29ad7146",
"0x716feafcba42d6d905cf441ec67abd6304bbd487561d12e6093a913f892412cf",
"0x6b54d3a8df769723c62f4fde6122fe5c06dbe507327334c904b0baa255e44ed1",
"0x2354d84639347f097b245a66b2f09e6e3a89b376d1d8f5a2cd88c628e454aa5b",
"0x77d7b9384a2901370023d0fc134be397edcb8c6df2294a753181bcb17c10a5d0"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


