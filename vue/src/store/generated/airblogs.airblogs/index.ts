import { Client, registry, MissingWalletError } from 'airblogs-client-ts'

import { Airpost } from "airblogs-client-ts/airblogs.airblogs/types"
import { airPost } from "airblogs-client-ts/airblogs.airblogs/types"
import { Comment } from "airblogs-client-ts/airblogs.airblogs/types"
import { Params } from "airblogs-client-ts/airblogs.airblogs/types"


export { Airpost, airPost, Comment, Params };

function initClient(vuexGetters) {
	return new Client(vuexGetters['common/env/getEnv'], vuexGetters['common/wallet/signer'])
}

function mergeResults(value, next_values) {
	for (let prop of Object.keys(next_values)) {
		if (Array.isArray(next_values[prop])) {
			value[prop]=[...value[prop], ...next_values[prop]]
		}else{
			value[prop]=next_values[prop]
		}
	}
	return value
}

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	let structure: {fields: Field[]} = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const getDefaultState = () => {
	return {
				Params: {},
				Getblogs: {},
				Getallblogs: {},
				Comment: {},
				CommentAll: {},
				
				_Structure: {
						Airpost: getStructure(Airpost.fromPartial({})),
						airPost: getStructure(airPost.fromPartial({})),
						Comment: getStructure(Comment.fromPartial({})),
						Params: getStructure(Params.fromPartial({})),
						
		},
		_Registry: registry,
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(JSON.stringify(subscription))
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(JSON.stringify(subscription))
		}
	},
	getters: {
				getParams: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Params[JSON.stringify(params)] ?? {}
		},
				getGetblogs: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Getblogs[JSON.stringify(params)] ?? {}
		},
				getGetallblogs: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Getallblogs[JSON.stringify(params)] ?? {}
		},
				getComment: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Comment[JSON.stringify(params)] ?? {}
		},
				getCommentAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.CommentAll[JSON.stringify(params)] ?? {}
		},
				
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		},
		getRegistry: (state) => {
			return state._Registry
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('Vuex module: airblogs.airblogs initialized!')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach(async (subscription) => {
				try {
					const sub=JSON.parse(subscription)
					await dispatch(sub.action, sub.payload)
				}catch(e) {
					throw new Error('Subscriptions: ' + e.message)
				}
			})
		},
		
		
		
		 		
		
		
		async QueryParams({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.AirblogsAirblogs.query.queryParams()).data
				
					
				commit('QUERY', { query: 'Params', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: {...key},query }})
				return getters['getParams']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryParams API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryGetblogs({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.AirblogsAirblogs.query.queryGetblogs( key.id)).data
				
					
				commit('QUERY', { query: 'Getblogs', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryGetblogs', payload: { options: { all }, params: {...key},query }})
				return getters['getGetblogs']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryGetblogs API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryGetallblogs({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.AirblogsAirblogs.query.queryGetallblogs(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.AirblogsAirblogs.query.queryGetallblogs({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'Getallblogs', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryGetallblogs', payload: { options: { all }, params: {...key},query }})
				return getters['getGetallblogs']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryGetallblogs API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryComment({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.AirblogsAirblogs.query.queryComment( key.id)).data
				
					
				commit('QUERY', { query: 'Comment', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryComment', payload: { options: { all }, params: {...key},query }})
				return getters['getComment']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryComment API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryCommentAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.AirblogsAirblogs.query.queryCommentAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.AirblogsAirblogs.query.queryCommentAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'CommentAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryCommentAll', payload: { options: { all }, params: {...key},query }})
				return getters['getCommentAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryCommentAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgPost({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.AirblogsAirblogs.tx.sendMsgPost({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgPost:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgPost:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgPostblog({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.AirblogsAirblogs.tx.sendMsgPostblog({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgPostblog:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgPostblog:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateComment({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.AirblogsAirblogs.tx.sendMsgCreateComment({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateComment:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateComment:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgPost({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.AirblogsAirblogs.tx.msgPost({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgPost:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgPost:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgPostblog({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.AirblogsAirblogs.tx.msgPostblog({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgPostblog:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgPostblog:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateComment({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.AirblogsAirblogs.tx.msgCreateComment({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateComment:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateComment:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}
