require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enter off food iron raise ranch public inside light army gauge'; 
let testAccounts = [
"0x53170324db2c63747e96c7fa513c54571eaef4079090c8be3b7fe296b06637d8",
"0x6b5676792054db2ee302985b6842ad61db2a80af0c375d0c5227ee1131e592f7",
"0xfe8527b9030f035a840c35485751034b17ac9edcdcf17c8bc74068d5019db36a",
"0x34d7ff53ade92f47afadf5e9011bdd742be982f6ff03960be02f53ad385bab1c",
"0x4866e32a71a9f109f23ec4bd3032c6f6755392e886c41bdec202a9723e218089",
"0xdbe6a3aefabb366c2d18144774c23f6ce325f5b2de25dd0ff9249a5afd530f8f",
"0x9fea42d033f6dd51e3f966fead1886c9ca8597cbaa09d0a9d9ac27e9b6e6a71a",
"0xb0ffe2f386c38fb2534774b163a26a7109b8c1dc1e94c8f431da6b7ff7d9af00",
"0x9efd36945226b69e6f7807ead0ad2ae0a75bc0535664f4e08668f9028f2c3249",
"0x80a9aab0d9d4e1026cb0fe10b5bf6f75d424577905861b648a83b37e387a97a8"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

