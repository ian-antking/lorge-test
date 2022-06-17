import PostCard from './PostCard'
import styled from 'styled-components'

interface Post {
  id: string
  title: string
  author: string
  blurb: string
  published: string
}

interface Props {
  posts: Post[]
}

const PostCardContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const PostCards: React.FC<Props> = ({ posts }): React.ReactElement => {
  if (posts.length > 0) {
    return (
      <PostCardContainer>
        {posts.map((post: Post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            author={post.author}
            published={post.published}
            blurb={post.blurb}
          />
        ))}
      </PostCardContainer>
    )
  } else {
    return (
      <PostCardContainer>
        <h1>Nothing Here</h1>
      </PostCardContainer>
    )
  }
}

export default PostCards
