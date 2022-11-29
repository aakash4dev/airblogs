package keeper_test

import (
	"context"
	"testing"

	keepertest "airblogs/testutil/keeper"
	"airblogs/x/airblogs/keeper"
	"airblogs/x/airblogs/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.AirblogsKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
