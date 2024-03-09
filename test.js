import WoodrowRempelrEth from './index.js';

const getEth = new WoodrowRempelrEth()
getEth.getBalance("0x65DB1a5ac48d4A97dC0A104D8276d7017208A975",).then(balance => { console.log("Balance without lib: ", balance) })
getEth.getBalance("0x65DB1a5ac48d4A97dC0A104D8276d7017208A975", "GetEthBalance").then(balance => { console.log("Balance with lib: ", balance) })