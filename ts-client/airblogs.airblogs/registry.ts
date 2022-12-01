import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateComment } from "./types/airblogs/airblogs/tx";
import { MsgPostblog } from "./types/airblogs/airblogs/tx";
import { MsgPost } from "./types/airblogs/airblogs/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/airblogs.airblogs.MsgCreateComment", MsgCreateComment],
    ["/airblogs.airblogs.MsgPostblog", MsgPostblog],
    ["/airblogs.airblogs.MsgPost", MsgPost],
    
];

export { msgTypes }