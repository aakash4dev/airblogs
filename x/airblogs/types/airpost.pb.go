// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: airblogs/airblogs/airpost.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Airpost struct {
	Title  string `protobuf:"bytes,1,opt,name=title,proto3" json:"title,omitempty"`
	Body   string `protobuf:"bytes,2,opt,name=body,proto3" json:"body,omitempty"`
	Imgurl string `protobuf:"bytes,3,opt,name=imgurl,proto3" json:"imgurl,omitempty"`
}

func (m *Airpost) Reset()         { *m = Airpost{} }
func (m *Airpost) String() string { return proto.CompactTextString(m) }
func (*Airpost) ProtoMessage()    {}
func (*Airpost) Descriptor() ([]byte, []int) {
	return fileDescriptor_70cbe973e1c3e0d9, []int{0}
}
func (m *Airpost) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Airpost) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Airpost.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Airpost) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Airpost.Merge(m, src)
}
func (m *Airpost) XXX_Size() int {
	return m.Size()
}
func (m *Airpost) XXX_DiscardUnknown() {
	xxx_messageInfo_Airpost.DiscardUnknown(m)
}

var xxx_messageInfo_Airpost proto.InternalMessageInfo

func (m *Airpost) GetTitle() string {
	if m != nil {
		return m.Title
	}
	return ""
}

func (m *Airpost) GetBody() string {
	if m != nil {
		return m.Body
	}
	return ""
}

func (m *Airpost) GetImgurl() string {
	if m != nil {
		return m.Imgurl
	}
	return ""
}

func init() {
	proto.RegisterType((*Airpost)(nil), "airblogs.airblogs.Airpost")
}

func init() { proto.RegisterFile("airblogs/airblogs/airpost.proto", fileDescriptor_70cbe973e1c3e0d9) }

var fileDescriptor_70cbe973e1c3e0d9 = []byte{
	// 153 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x4f, 0xcc, 0x2c, 0x4a,
	0xca, 0xc9, 0x4f, 0x2f, 0xd6, 0x47, 0x66, 0x14, 0xe4, 0x17, 0x97, 0xe8, 0x15, 0x14, 0xe5, 0x97,
	0xe4, 0x0b, 0x09, 0xc2, 0xc4, 0xf5, 0x60, 0x0c, 0x25, 0x6f, 0x2e, 0x76, 0x47, 0x88, 0x1a, 0x21,
	0x11, 0x2e, 0xd6, 0x92, 0xcc, 0x92, 0x9c, 0x54, 0x09, 0x46, 0x05, 0x46, 0x0d, 0xce, 0x20, 0x08,
	0x47, 0x48, 0x88, 0x8b, 0x25, 0x29, 0x3f, 0xa5, 0x52, 0x82, 0x09, 0x2c, 0x08, 0x66, 0x0b, 0x89,
	0x71, 0xb1, 0x65, 0xe6, 0xa6, 0x97, 0x16, 0xe5, 0x48, 0x30, 0x83, 0x45, 0xa1, 0x3c, 0x27, 0xe3,
	0x13, 0x8f, 0xe4, 0x18, 0x2f, 0x3c, 0x92, 0x63, 0x7c, 0xf0, 0x48, 0x8e, 0x71, 0xc2, 0x63, 0x39,
	0x86, 0x0b, 0x8f, 0xe5, 0x18, 0x6e, 0x3c, 0x96, 0x63, 0x88, 0x92, 0x84, 0xbb, 0xa8, 0x02, 0xe1,
	0xb8, 0x92, 0xca, 0x82, 0xd4, 0xe2, 0x24, 0x36, 0xb0, 0xdb, 0x8c, 0x01, 0x01, 0x00, 0x00, 0xff,
	0xff, 0x05, 0x3d, 0xc5, 0x0c, 0xbe, 0x00, 0x00, 0x00,
}

func (m *Airpost) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Airpost) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Airpost) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Imgurl) > 0 {
		i -= len(m.Imgurl)
		copy(dAtA[i:], m.Imgurl)
		i = encodeVarintAirpost(dAtA, i, uint64(len(m.Imgurl)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.Body) > 0 {
		i -= len(m.Body)
		copy(dAtA[i:], m.Body)
		i = encodeVarintAirpost(dAtA, i, uint64(len(m.Body)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Title) > 0 {
		i -= len(m.Title)
		copy(dAtA[i:], m.Title)
		i = encodeVarintAirpost(dAtA, i, uint64(len(m.Title)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintAirpost(dAtA []byte, offset int, v uint64) int {
	offset -= sovAirpost(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Airpost) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Title)
	if l > 0 {
		n += 1 + l + sovAirpost(uint64(l))
	}
	l = len(m.Body)
	if l > 0 {
		n += 1 + l + sovAirpost(uint64(l))
	}
	l = len(m.Imgurl)
	if l > 0 {
		n += 1 + l + sovAirpost(uint64(l))
	}
	return n
}

func sovAirpost(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozAirpost(x uint64) (n int) {
	return sovAirpost(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Airpost) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowAirpost
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Airpost: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Airpost: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Title", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAirpost
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthAirpost
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthAirpost
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Title = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Body", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAirpost
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthAirpost
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthAirpost
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Body = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Imgurl", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAirpost
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthAirpost
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthAirpost
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Imgurl = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipAirpost(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthAirpost
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipAirpost(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowAirpost
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowAirpost
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowAirpost
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthAirpost
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupAirpost
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthAirpost
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthAirpost        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowAirpost          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupAirpost = fmt.Errorf("proto: unexpected end of group")
)
