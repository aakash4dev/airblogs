package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgPost = "post"

var _ sdk.Msg = &MsgPost{}

func NewMsgPost(creator string, title string, imgurl string, body string) *MsgPost {
	return &MsgPost{
		Creator: creator,
		Title:   title,
		Imgurl:  imgurl,
		Body:    body,
	}
}

func (msg *MsgPost) Route() string {
	return RouterKey
}

func (msg *MsgPost) Type() string {
	return TypeMsgPost
}

func (msg *MsgPost) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgPost) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgPost) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
