import styled from "styled-components";

//  search styling
export const SearchContainer = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

export const InputSearchBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

export const InputSearchField = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus {
    outline: 0;
  }
`;

//  git list styling
export const GitListContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
    max-width:600px;
    margin auto;
`;

// gits styling
export const GistWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px 0px 30px 0px;
	border-bottom: 1px solid #eef0f1;
`;

export const GistHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

export const OwnerImage = styled.img.attrs((props) => ({
  src: props.src,
}))`
	border-radius: 50%;
	width: 40px;
	height: fit-content;
`;

export const OwnerName = styled.p`
	color: #0265d6;
	font-size: 12px;
	padding-left: 10px;
`;

export const InfoContainer = styled.div`
	color: #0265d6;
	padding-left: 20px;
	align-items: center;
	display: flex;
`;

export const InfoContainerText = styled.div`
	margin: 0px;
	font-size: 12px;

	padding-left: 5px;
	min-width: 46px;
`;

export const HeaderContainer = styled.div`
	display: flex;
`;

export const Timestamps = styled.div`
	padding-top: 5px;
	display: flex;
`;

export const Timestamp = styled.p`
	font-size: 10px;
	margin: 0px;
	&:nth-child(2) {
		padding-left: 10px;
	}
`;

export const DescriptionContainer = styled.div`
	padding-top: 10px;
	line-break: anywhere;
`;

export const FilesContainer = styled.div`
	padding-top: 10px;
	display: flex;
`;

export const File = styled.div`
	color: #0265d6;
	font-size: 11px;
	padding-left: 10px;
	display: flex;
`;

//  header wrapper
export const HeaderWrapper = styled.div`
  background-color: #24292e;
  color: #ffffff;
  z-index: 32;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;