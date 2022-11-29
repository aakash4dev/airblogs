package airblogs_test

import (
	"testing"

	keepertest "airblogs/testutil/keeper"
	"airblogs/testutil/nullify"
	"airblogs/x/airblogs"
	"airblogs/x/airblogs/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.AirblogsKeeper(t)
	airblogs.InitGenesis(ctx, *k, genesisState)
	got := airblogs.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
