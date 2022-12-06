import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateComment } from "./types/airblogs/airblogs/tx";
import { MsgPost } from "./types/airblogs/airblogs/tx";
import { MsgPostblog } from "./types/airblogs/airblogs/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/airblogs.airblogs.MsgCreateComment", MsgCreateComment],
    ["/airblogs.airblogs.MsgPost", MsgPost],
    ["/airblogs.airblogs.MsgPostblog", MsgPostblog],
    
];

export { msgTypes }