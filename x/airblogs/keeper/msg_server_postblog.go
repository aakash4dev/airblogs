package keeper

import (
	"context"

	"airblogs/x/airblogs/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) Postblog(goCtx context.Context, msg *types.MsgPostblog) (*types.MsgPostblogResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgPostblogResponse{}, nil
}
