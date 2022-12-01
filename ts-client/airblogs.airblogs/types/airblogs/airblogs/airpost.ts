/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "airblogs.airblogs";

export interface Airpost {
  title: string;
  body: string;
  imgurl: string;
}

function createBaseAirpost(): Airpost {
  return { title: "", body: "", imgurl: "" };
}

export const Airpost = {
  encode(message: Airpost, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.body !== "") {
      writer.uint32(18).string(message.body);
    }
    if (message.imgurl !== "") {
      writer.uint32(26).string(message.imgurl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Airpost {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAirpost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.body = reader.string();
          break;
        case 3:
          message.imgurl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Airpost {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      body: isSet(object.body) ? String(object.body) : "",
      imgurl: isSet(object.imgurl) ? String(object.imgurl) : "",
    };
  },

  toJSON(message: Airpost): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.body !== undefined && (obj.body = message.body);
    message.imgurl !== undefined && (obj.imgurl = message.imgurl);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Airpost>, I>>(object: I): Airpost {
    const message = createBaseAirpost();
    message.title = object.title ?? "";
    message.body = object.body ?? "";
    message.imgurl = object.imgurl ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
