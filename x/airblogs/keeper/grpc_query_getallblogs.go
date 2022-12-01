package keeper

import (
	"airblogs/x/airblogs/types"
	"context"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Getallblogs(goCtx context.Context, req *types.QueryGetallblogsRequest) (*types.QueryGetallblogsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	var allblogs []types.AirPost
	ctx := sdk.UnwrapSDKContext(goCtx)
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.PostKey))

	pageRes, err := query.Paginate(store, req.Pagination, func(key []byte, value []byte) error {
		var blog types.AirPost
		if err := k.cdc.Unmarshal(value, &blog); err != nil {
			return err
		}
		allblogs = append(allblogs, blog)
		return nil
	})

	if err == nil {
		return &types.QueryGetallblogsResponse{AirPost: allblogs, Pagination: pageRes}, nil
	} else {
		return &types.QueryGetallblogsResponse{}, nil
	}
}
