import Octicon from "react-octicon";
import PropTypes from 'prop-types';
import {
  DescriptionContainer,
  File,
  FilesContainer,
  GistHeader,
  GistWrapper,
  HeaderContainer,
  InfoContainer,
  InfoContainerText,
  OwnerImage,
  OwnerName,
  Timestamp,
  Timestamps
} from "./styles";
import { getDate } from "../utils/helper";

//  this function get files count
const getFileCount = (files) => Object.entries(files).length;

const Gist = ({ gist }) => {
  //  extract data from gist object and display below.
  const {
    owner: { avatar_url, login, starred_url, html_url } = {},
    files = [],
    created_at,
    updated_at,
    description,
    forks_url,
    comments_url
  } = gist || {};

  // date list array of objects used to render the multiple data.
  const dateList = [
    {
      label: `Created at: ${getDate(created_at)}`
    },
    {
      label: `Last updated: ${getDate(updated_at)}`
    }
  ];

  // information list array of objects used to render the multiple data and link values also.
  const infoDataList = [
    {
      label: `${getFileCount(files)}
      ${getFileCount(files) > 1 ? "Files" : "File"}`,
      name: "code",
    },
    {
      label: "Forks",
      name: "repo-forked",
      link: forks_url
    },
    {
      label: "Comments",
      name: "comment",
      link: comments_url
    },
    {
      label: "Stars",
      name: "star",
      link: starred_url
    }
  ]

  return (
    <GistWrapper>
      <GistHeader>
        <HeaderContainer>
          {/* owner information display */}
          <OwnerImage src={avatar_url} />
          <a href={html_url} target="_blank" rel="noreferrer">
            <OwnerName>{login}</OwnerName>
          </a>
        </HeaderContainer>
        <HeaderContainer>
          {/* info display items */}
          {
            infoDataList.map((infoItem, index) => (
              <InfoContainer key={index}>
                <Octicon name={infoItem.name} />
                <a href={infoItem.link} target="_blank" rel="noreferrer">
                  <InfoContainerText>
                    {infoItem.label}
                  </InfoContainerText>
                </a>

              </InfoContainer>
            ))
          }
        </HeaderContainer>
      </GistHeader>
      <Timestamps>
        {/* created and updated display */}
        {
          dateList.map((dateItem, index) => (
            <Timestamp key={index}>
              {dateItem.label}
            </Timestamp>
          ))
        }
      </Timestamps>
      <DescriptionContainer>{description}</DescriptionContainer>
      <FilesContainer>
        {/* files name display */}
        {Object.keys(files).map((fileItem) => (
          <File>
            <Octicon name="file-text" />
            {fileItem}
          </File>
        ))}
      </FilesContainer>
    </GistWrapper>
  );
};

// Declare that a prop is a specific JS type. By default, these are required
Gist.propTypes = {
  gist: PropTypes.object.isRequired
}

export default Gist;
