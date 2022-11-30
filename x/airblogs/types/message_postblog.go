package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgPostblog = "postblog"

var _ sdk.Msg = &MsgPostblog{}

func NewMsgPostblog(creator string, title string, imgurl string, body string) *MsgPostblog {
	return &MsgPostblog{
		Creator: creator,
		Title:   title,
		Imgurl:  imgurl,
		Body:    body,
	}
}

func (msg *MsgPostblog) Route() string {
	return RouterKey
}

func (msg *MsgPostblog) Type() string {
	return TypeMsgPostblog
}

func (msg *MsgPostblog) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgPostblog) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgPostblog) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
