/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "airblogs.airblogs";

export interface MsgPostblog {
  creator: string;
  title: string;
  imgurl: string;
  body: string;
}

export interface MsgPostblogResponse {
}

export interface MsgPost {
  creator: string;
  title: string;
  imgurl: string;
  body: string;
}

export interface MsgPostResponse {
  id: number;
}

function createBaseMsgPostblog(): MsgPostblog {
  return { creator: "", title: "", imgurl: "", body: "" };
}

export const MsgPostblog = {
  encode(message: MsgPostblog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.imgurl !== "") {
      writer.uint32(26).string(message.imgurl);
    }
    if (message.body !== "") {
      writer.uint32(34).string(message.body);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostblog {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPostblog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.imgurl = reader.string();
          break;
        case 4:
          message.body = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPostblog {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      title: isSet(object.title) ? String(object.title) : "",
      imgurl: isSet(object.imgurl) ? String(object.imgurl) : "",
      body: isSet(object.body) ? String(object.body) : "",
    };
  },

  toJSON(message: MsgPostblog): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.title !== undefined && (obj.title = message.title);
    message.imgurl !== undefined && (obj.imgurl = message.imgurl);
    message.body !== undefined && (obj.body = message.body);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPostblog>, I>>(object: I): MsgPostblog {
    const message = createBaseMsgPostblog();
    message.creator = object.creator ?? "";
    message.title = object.title ?? "";
    message.imgurl = object.imgurl ?? "";
    message.body = object.body ?? "";
    return message;
  },
};

function createBaseMsgPostblogResponse(): MsgPostblogResponse {
  return {};
}

export const MsgPostblogResponse = {
  encode(_: MsgPostblogResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostblogResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPostblogResponse();
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

  fromJSON(_: any): MsgPostblogResponse {
    return {};
  },

  toJSON(_: MsgPostblogResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPostblogResponse>, I>>(_: I): MsgPostblogResponse {
    const message = createBaseMsgPostblogResponse();
    return message;
  },
};

function createBaseMsgPost(): MsgPost {
  return { creator: "", title: "", imgurl: "", body: "" };
}

export const MsgPost = {
  encode(message: MsgPost, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.imgurl !== "") {
      writer.uint32(26).string(message.imgurl);
    }
    if (message.body !== "") {
      writer.uint32(34).string(message.body);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPost {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.imgurl = reader.string();
          break;
        case 4:
          message.body = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPost {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      title: isSet(object.title) ? String(object.title) : "",
      imgurl: isSet(object.imgurl) ? String(object.imgurl) : "",
      body: isSet(object.body) ? String(object.body) : "",
    };
  },

  toJSON(message: MsgPost): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.title !== undefined && (obj.title = message.title);
    message.imgurl !== undefined && (obj.imgurl = message.imgurl);
    message.body !== undefined && (obj.body = message.body);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPost>, I>>(object: I): MsgPost {
    const message = createBaseMsgPost();
    message.creator = object.creator ?? "";
    message.title = object.title ?? "";
    message.imgurl = object.imgurl ?? "";
    message.body = object.body ?? "";
    return message;
  },
};

function createBaseMsgPostResponse(): MsgPostResponse {
  return { id: 0 };
}

export const MsgPostResponse = {
  encode(message: MsgPostResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPostResponse();
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

  fromJSON(object: any): MsgPostResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgPostResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPostResponse>, I>>(object: I): MsgPostResponse {
    const message = createBaseMsgPostResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  Postblog(request: MsgPostblog): Promise<MsgPostblogResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  Post(request: MsgPost): Promise<MsgPostResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Postblog = this.Postblog.bind(this);
    this.Post = this.Post.bind(this);
  }
  Postblog(request: MsgPostblog): Promise<MsgPostblogResponse> {
    const data = MsgPostblog.encode(request).finish();
    const promise = this.rpc.request("airblogs.airblogs.Msg", "Postblog", data);
    return promise.then((data) => MsgPostblogResponse.decode(new _m0.Reader(data)));
  }

  Post(request: MsgPost): Promise<MsgPostResponse> {
    const data = MsgPost.encode(request).finish();
    const promise = this.rpc.request("airblogs.airblogs.Msg", "Post", data);
    return promise.then((data) => MsgPostResponse.decode(new _m0.Reader(data)));
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
