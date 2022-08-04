var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

const bip32 = require('bip32');
const bip39 = require('bip39');
const bitcoinjs = require('bitcoinjs-lib');

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/create-wallet", (req, res, next) => {
    //testnet network
    const network = bitcoinjs.networks.testnet
    //hierarchical deterministic derivation wallet type
    const walletType = `m/49'/1'/0'/0`;
    //wallet seed generation
    let mnemonic = bip39.generateMnemonic();
    const seed = bip39.mnemonicToSeedSync(mnemonic);
    //root wallet generate
    let walletRoot = bip32.fromSeed(seed, network);
    //private and public keys generate (bitcoin account) 
    let walletKeys = walletRoot.derivePath(walletType);
    let node = walletKeys.derive(0).derive(0)
    //btc address (the wallet)
    let btcWallet = bitcoinjs.payments.p2pkh({
    pubkey: node.publicKey,
    network: network
    }).address;

    waletdata = {
        'address': btcWallet,
        'private_key': node.toWIF(),
        'seed': mnemonic
    }
    res.json(waletdata);
});