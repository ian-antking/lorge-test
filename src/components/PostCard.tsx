import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import formatDate from '../utils/format-date'
import truncateText from '../utils/truncate-text'

interface Props {
  id: string
  title: string
  author: string
  blurb: string
  published: string
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const PostCardContainer = styled.div`
  width: 80vw;
  padding: 20px;
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.shadow} 1.95px 1.95px 2.6px;
  margin: 20px;
  box-sizing: border-box;
`

const PostCardTitle = styled.div`
  font-weight: bold;
  font-size: 1.5em;
  margin-bottom: 10px;
`

const PostCardHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  opacity: 0.5;
`

const PostCardContent = styled.div`
  margin: 10px;
  overflow: hidden;
  text-overflow: 'ellipsis';
`

const PostCardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  opacity: 0.5;
`

const PostCard: React.FC<Props> = ({
  id,
  title,
  author,
  blurb,
  published
}): React.ReactElement => (
  <StyledLink to={`/post/${id}`} key={id}>
    <PostCardContainer>
      <PostCardHeader>
        <span>{formatDate(published)}</span>
      </PostCardHeader>

      <PostCardTitle>
        <span>{title}</span>
      </PostCardTitle>

      <PostCardContent>{truncateText(blurb)}</PostCardContent>

      <PostCardFooter>
        <span>{author}</span>
      </PostCardFooter>
    </PostCardContainer>
  </StyledLink>
)

export default PostCard
