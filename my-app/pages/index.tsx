import { Client } from "../ts-client"
import { useState,useEffect } from "react"
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";

export default function Home() {
  const chainId = 'mychain-1'
  const callWallet = async()=>{
    /*
    const mnemonic = "play butter frown city voyage pupil rabbit wheat thrive mind skate turkey helmet thrive door either differ gate exhibit impose city swallow goat faint";
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic,{prefix:"air"});

    const client = new Client({ 
            apiURL: "http://localhost:1317",
            rpcURL: "http://localhost:26657",
            prefix: "air"
        },
        wallet
    );
      
    const balances = await client.CosmosBankV1Beta1.query.queryAllBalances('air13xkhcx2dquhqdml0k37sr7yndquwteuvp2mzz5');
    console.log("Balances: \n",JSON.stringify(balances.data.balances))

    const res = await client.AirblogsAirblogs.tx.sendMsgPostblog({
      value: {
        creator:"air13xkhcx2dquhqdml0k37sr7yndquwteuvp2mzz5", 
        title:"i would something just like this", 
        imgurl:"tannana tannaa", 
        body:"i would something just like this", 
      },
      fee: {
        amount: [{ amount: '0', denom: 'stake' }],
        gas: '200000',
      },
      memo:"asdfasdf",
    });

    console.log(res)
*/
const client = new Client({ 
  apiURL: "http://localhost:1317",
  rpcURL: "http://localhost:26657",
  prefix: "cosmos"
},
window.keplr.getOfflineSigner(chainId)
);
await client.useKeplr();
  }
  useEffect(() => {
    callWallet()
  }, [])
  
  return (
    <>lets do hard part now
    </>
  )
}
