package keeper

import (
	"context"

	"airblogs/x/airblogs/types"
	// "github.com/cosmos/cosmos-sdk/store/prefix"
	// sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Getblogs(goCtx context.Context, req *types.QueryGetblogsRequest) (*types.QueryGetblogsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	// var post types.AirPost
	// ctx := sdk.UnwrapSDKContext(goCtx)
	// store := ctx.KVStore(k.storeKey)
	// postStore := prefix.NewStore(store, []byte(types.PostKey))

	return &types.QueryGetblogsResponse{}, nil
}
