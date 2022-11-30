import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'

import { Client } from '../../ts-client';
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";

const mnemonic = "play butter frown city voyage pupil rabbit wheat thrive mind skate turkey helmet thrive door either differ gate exhibit impose city swallow goat faint";
const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic);

const client = new Client({ 
        apiURL: "http://localhost:1317",
        rpcURL: "http://localhost:26657",
        prefix: "air"
    },
    wallet
);

const balances = await client.CosmosBankV1Beta1.query.queryAllBalances('air13xkhcx2dquhqdml0k37sr7yndquwteuvp2mzz5');
console.log(balances)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
