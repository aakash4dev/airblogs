/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { airPost } from "./blog";
import { Comment } from "./comment";
import { Params } from "./params";

export const protobufPackage = "airblogs.airblogs";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetblogsRequest {
  /** cosmos.base.query.v1beta1.PageRequest pagination = 1; */
  id: string;
}

export interface QueryGetblogsResponse {
  title: string;
  imgurl: string;
  body: string;
}

export interface QueryGetallblogsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryGetallblogsResponse {
  AirPost: airPost[];
  pagination: PageResponse | undefined;
}

export interface QueryGetCommentRequest {
  id: number;
}

export interface QueryGetCommentResponse {
  Comment: Comment | undefined;
}

export interface QueryAllCommentRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCommentResponse {
  Comment: Comment[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetblogsRequest(): QueryGetblogsRequest {
  return { id: "" };
}

export const QueryGetblogsRequest = {
  encode(message: QueryGetblogsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetblogsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetblogsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetblogsRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: QueryGetblogsRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetblogsRequest>, I>>(object: I): QueryGetblogsRequest {
    const message = createBaseQueryGetblogsRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryGetblogsResponse(): QueryGetblogsResponse {
  return { title: "", imgurl: "", body: "" };
}

export const QueryGetblogsResponse = {
  encode(message: QueryGetblogsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.imgurl !== "") {
      writer.uint32(18).string(message.imgurl);
    }
    if (message.body !== "") {
      writer.uint32(26).string(message.body);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetblogsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetblogsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.imgurl = reader.string();
          break;
        case 3:
          message.body = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetblogsResponse {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      imgurl: isSet(object.imgurl) ? String(object.imgurl) : "",
      body: isSet(object.body) ? String(object.body) : "",
    };
  },

  toJSON(message: QueryGetblogsResponse): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.imgurl !== undefined && (obj.imgurl = message.imgurl);
    message.body !== undefined && (obj.body = message.body);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetblogsResponse>, I>>(object: I): QueryGetblogsResponse {
    const message = createBaseQueryGetblogsResponse();
    message.title = object.title ?? "";
    message.imgurl = object.imgurl ?? "";
    message.body = object.body ?? "";
    return message;
  },
};

function createBaseQueryGetallblogsRequest(): QueryGetallblogsRequest {
  return { pagination: undefined };
}

export const QueryGetallblogsRequest = {
  encode(message: QueryGetallblogsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetallblogsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetallblogsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetallblogsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryGetallblogsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetallblogsRequest>, I>>(object: I): QueryGetallblogsRequest {
    const message = createBaseQueryGetallblogsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetallblogsResponse(): QueryGetallblogsResponse {
  return { AirPost: [], pagination: undefined };
}

export const QueryGetallblogsResponse = {
  encode(message: QueryGetallblogsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.AirPost) {
      airPost.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetallblogsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetallblogsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.AirPost.push(airPost.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetallblogsResponse {
    return {
      AirPost: Array.isArray(object?.AirPost) ? object.AirPost.map((e: any) => airPost.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryGetallblogsResponse): unknown {
    const obj: any = {};
    if (message.AirPost) {
      obj.AirPost = message.AirPost.map((e) => e ? airPost.toJSON(e) : undefined);
    } else {
      obj.AirPost = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetallblogsResponse>, I>>(object: I): QueryGetallblogsResponse {
    const message = createBaseQueryGetallblogsResponse();
    message.AirPost = object.AirPost?.map((e) => airPost.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetCommentRequest(): QueryGetCommentRequest {
  return { id: 0 };
}

export const QueryGetCommentRequest = {
  encode(message: QueryGetCommentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCommentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCommentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCommentRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetCommentRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetCommentRequest>, I>>(object: I): QueryGetCommentRequest {
    const message = createBaseQueryGetCommentRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetCommentResponse(): QueryGetCommentResponse {
  return { Comment: undefined };
}

export const QueryGetCommentResponse = {
  encode(message: QueryGetCommentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Comment !== undefined) {
      Comment.encode(message.Comment, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCommentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCommentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Comment = Comment.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCommentResponse {
    return { Comment: isSet(object.Comment) ? Comment.fromJSON(object.Comment) : undefined };
  },

  toJSON(message: QueryGetCommentResponse): unknown {
    const obj: any = {};
    message.Comment !== undefined && (obj.Comment = message.Comment ? Comment.toJSON(message.Comment) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetCommentResponse>, I>>(object: I): QueryGetCommentResponse {
    const message = createBaseQueryGetCommentResponse();
    message.Comment = (object.Comment !== undefined && object.Comment !== null)
      ? Comment.fromPartial(object.Comment)
      : undefined;
    return message;
  },
};

function createBaseQueryAllCommentRequest(): QueryAllCommentRequest {
  return { pagination: undefined };
}

export const QueryAllCommentRequest = {
  encode(message: QueryAllCommentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllCommentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCommentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCommentRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllCommentRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllCommentRequest>, I>>(object: I): QueryAllCommentRequest {
    const message = createBaseQueryAllCommentRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllCommentResponse(): QueryAllCommentResponse {
  return { Comment: [], pagination: undefined };
}

export const QueryAllCommentResponse = {
  encode(message: QueryAllCommentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Comment) {
      Comment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllCommentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCommentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Comment.push(Comment.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCommentResponse {
    return {
      Comment: Array.isArray(object?.Comment) ? object.Comment.map((e: any) => Comment.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllCommentResponse): unknown {
    const obj: any = {};
    if (message.Comment) {
      obj.Comment = message.Comment.map((e) => e ? Comment.toJSON(e) : undefined);
    } else {
      obj.Comment = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllCommentResponse>, I>>(object: I): QueryAllCommentResponse {
    const message = createBaseQueryAllCommentResponse();
    message.Comment = object.Comment?.map((e) => Comment.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Getblogs items. */
  Getblogs(request: QueryGetblogsRequest): Promise<QueryGetblogsResponse>;
  /** Queries a list of Getallblogs items. */
  Getallblogs(request: QueryGetallblogsRequest): Promise<QueryGetallblogsResponse>;
  /** Queries a Comment by id. */
  Comment(request: QueryGetCommentRequest): Promise<QueryGetCommentResponse>;
  /** Queries a list of Comment items. */
  CommentAll(request: QueryAllCommentRequest): Promise<QueryAllCommentResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Getblogs = this.Getblogs.bind(this);
    this.Getallblogs = this.Getallblogs.bind(this);
    this.Comment = this.Comment.bind(this);
    this.CommentAll = this.CommentAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("airblogs.airblogs.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Getblogs(request: QueryGetblogsRequest): Promise<QueryGetblogsResponse> {
    const data = QueryGetblogsRequest.encode(request).finish();
    const promise = this.rpc.request("airblogs.airblogs.Query", "Getblogs", data);
    return promise.then((data) => QueryGetblogsResponse.decode(new _m0.Reader(data)));
  }

  Getallblogs(request: QueryGetallblogsRequest): Promise<QueryGetallblogsResponse> {
    const data = QueryGetallblogsRequest.encode(request).finish();
    const promise = this.rpc.request("airblogs.airblogs.Query", "Getallblogs", data);
    return promise.then((data) => QueryGetallblogsResponse.decode(new _m0.Reader(data)));
  }

  Comment(request: QueryGetCommentRequest): Promise<QueryGetCommentResponse> {
    const data = QueryGetCommentRequest.encode(request).finish();
    const promise = this.rpc.request("airblogs.airblogs.Query", "Comment", data);
    return promise.then((data) => QueryGetCommentResponse.decode(new _m0.Reader(data)));
  }

  CommentAll(request: QueryAllCommentRequest): Promise<QueryAllCommentResponse> {
    const data = QueryAllCommentRequest.encode(request).finish();
    const promise = this.rpc.request("airblogs.airblogs.Query", "CommentAll", data);
    return promise.then((data) => QueryAllCommentResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
