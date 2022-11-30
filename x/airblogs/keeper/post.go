package keeper

import (
	"airblogs/x/airblogs/types"
	"encoding/binary"
	"fmt"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k Keeper) getNumberOfPosts(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.PostCountKey))
	byteKey := []byte(types.PostCountKey)

	numberOfPosts := store.Get(byteKey) // Get the value of the count
	if numberOfPosts == nil {
		return 0
	}
	return binary.BigEndian.Uint64(numberOfPosts) // bytes to uint64
}

func (k Keeper) setNumberOfPosts(ctx sdk.Context, newNumberOfPosts uint64) {
	// Link to database ( database / project name , collection name: Post/count)
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.PostCountKey))
	byteKey := []byte(types.PostCountKey) // convert collection name to bytes
	// convert newNumberOfPosts from uint64 to string
	newNumberOfPostsInByteForm := make([]byte, 8)
	binary.BigEndian.PutUint64(newNumberOfPostsInByteForm, newNumberOfPosts) // normal uint 64 number > [21 12 324 234 213 324 ]

	store.Set(byteKey, newNumberOfPostsInByteForm)
}

func (k Keeper) newAirPost(ctx sdk.Context, post types.AirPost) uint64 { // return id
	count := k.getNumberOfPosts(ctx)
	post.Id = count
	// post.ServersideData = []byte("some data server aka airchains will insert in blog from backend")
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.PostCountKey))

	// convert post id into bytes
	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, post.Id)

	// Marshal the post into bytes
	finalPostValues := k.cdc.MustMarshal(&post)

	// post data
	store.Set(byteKey, finalPostValues)

	gotthis := store.Get(byteKey)

	fmt.Print(gotthis)

	fmt.Println("saved at", byteKey)

	// update post count
	k.setNumberOfPosts(ctx, count+1)

	fmt.Println(count)

	return count
}
