package types

const (
	// ModuleName defines the module name
	ModuleName = "airblogs"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey defines the module's message routing key
	RouterKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_airblogs"

	PostKey      = "Post/value/" // value's of posts
	PostCountKey = "Post/count/" // count number of posts
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
