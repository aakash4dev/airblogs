// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgPostblog } from "./types/airblogs/airblogs/tx";
import { MsgPost } from "./types/airblogs/airblogs/tx";


export { MsgPostblog, MsgPost };

type sendMsgPostblogParams = {
  value: MsgPostblog,
  fee?: StdFee,
  memo?: string
};

type sendMsgPostParams = {
  value: MsgPost,
  fee?: StdFee,
  memo?: string
};


type msgPostblogParams = {
  value: MsgPostblog,
};

type msgPostParams = {
  value: MsgPost,
};


export const registry = new Registry(msgTypes);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgPostblog({ value, fee, memo }: sendMsgPostblogParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgPostblog: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgPostblog({ value: MsgPostblog.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgPostblog: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgPost({ value, fee, memo }: sendMsgPostParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgPost: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgPost({ value: MsgPost.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgPost: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgPostblog({ value }: msgPostblogParams): EncodeObject {
			try {
				return { typeUrl: "/airblogs.airblogs.MsgPostblog", value: MsgPostblog.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgPostblog: Could not create message: ' + e.message)
			}
		},
		
		msgPost({ value }: msgPostParams): EncodeObject {
			try {
				return { typeUrl: "/airblogs.airblogs.MsgPost", value: MsgPost.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgPost: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseURL: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	
	public registry: Array<[string, GeneratedType]> = [];

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });		
		this.updateTX(client);
		client.on('signer-changed',(signer) => {			
		 this.updateTX(client);
		})
	}
	updateTX(client: IgniteClient) {
    const methods = txClient({
        signer: client.signer,
        addr: client.env.rpcURL,
        prefix: client.env.prefix ?? "cosmos",
    })
	
    this.tx = methods;
    for (let m in methods) {
        this.tx[m] = methods[m].bind(this.tx);
    }
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			AirblogsAirblogs: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;