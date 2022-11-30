package keeper

import (
	"airblogs/x/airblogs/types"
	"context"
	// "fmt"
	sdk "github.com/cosmos/cosmos-sdk/types"
	// "os"
)

// "k" import all x/airblogs/keeper files(functions and values), its like module.
func (k msgServer) Post(goCtx context.Context, msg *types.MsgPost) (*types.MsgPostResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx) // ctx means context

	// create variable of data type MsgPost (in function)
	var post = types.AirPost{
		Creator: msg.Creator,
		Title:   msg.Title,
		Imgurl:  msg.Imgurl,
		Body:    msg.Body,
	}

	// fmt.Println("😄user give this data", ctx, post)
	id := k.newAirPost(ctx, post)
	// os.Exit(0) // its same as process.exit() of JS🧑‍💻

	// return &types.MsgPostResponse{}, nil
	return &types.MsgPostResponse{Id: id}, nil
}
