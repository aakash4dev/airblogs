package keeper

import (
	"airblogs/x/airblogs/types"
	"context"
	"encoding/binary"
	"fmt"
	"strconv"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Getblogs(goCtx context.Context, req *types.QueryGetblogsRequest) (*types.QueryGetblogsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	fmt.Println("⌛⌛ getting blog data....")

	ctx := sdk.UnwrapSDKContext(goCtx)
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.PostCountKey))

	// convert string ID to uint64
	blogID, _ := strconv.ParseUint(req.Id, 10, 64)

	// convert uint64 to byte
	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, blogID)

	blog := store.Get(byteKey)

	fmt.Println("blog number:", byteKey)
	fmt.Println("💾 Got this blog data: \n", blog)

	if blog != nil { // blog have some value
		var postInNormalForm types.AirPost
		k.cdc.Unmarshal(blog, &postInNormalForm)

		return &types.QueryGetblogsResponse{
			Title:  postInNormalForm.Title,
			Imgurl: postInNormalForm.Imgurl,
			Body:   postInNormalForm.Body,
		}, nil
	} else {
		return &types.QueryGetblogsResponse{}, nil
	}
}
