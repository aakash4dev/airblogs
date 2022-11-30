```
ignite scaffold chain airblogs --address-prefix air

git add .
git commit -m "improved"

ignite scaffold message post title imgurl body --response id:uint
```
- edit code at `x/blog/keeper/msg_server_create_post.go`: it decide what to do with post
- make file post.proto aka `proto/blog/blog/post.proto`. it will be like `Schema of Mongoose`
- `x/blog/types/keys.go` make keys aka collection/file/storage name to store data. append/write these two lines inside const( <here> )
```
    PostKey      = "Post/value/"
    PostCountKey = "Post/count/"
```
- make and call a module/component to store data, `x/blog/keeper/post.go` functions to insert data will be here.

```

func (k Keeper) Getblogs(goCtx context.Context, req *types.QueryGetblogsRequest) (*types.QueryGetblogsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	fmt.Println("⌛⌛ getting blog data....")

	ctx := sdk.UnwrapSDKContext(goCtx)
	// store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.PostKey))
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
```


### Create GetAllBlogs :: CURD get(allblogs) 
```
ignite scaffold query getblogs --response title imgurl body
```
NOTE: `query` `get data`, and not take gas. `message` `post data` and can take gas if its any function make changes in blockchain

<hr><hr><hr><hr><hr>

## suggest in discord > docs:
1.)
ignite scaffold message createPost title body
then edit codes at tx.proto > uint64 id : 1 ; 
OR
ignite scaffold message createPost title body --response id:uint
