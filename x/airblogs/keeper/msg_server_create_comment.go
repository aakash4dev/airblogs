package keeper

import (
	"context"

	"airblogs/x/airblogs/types"
	// sdk "github.com/cosmos/cosmos-sdk/types"
	// sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateComment(goCtx context.Context, msg *types.MsgCreateComment) (*types.MsgCreateCommentResponse, error) {
	return &types.MsgCreateCommentResponse{Id: 1}, nil
}
