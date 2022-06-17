import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Markdown from './Markdown'

import getPost from '../utils/get-post'
import decodeContent from '../utils/decode-content'

interface Post {
  id: string
  title: string
  author: string
  blurb: string
  published: string
  content: string
}

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
`

const ContentCard = styled.div`
  width: 80vw;
  padding: 20px;
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.dark} 1.95px 1.95px 2.6px;
  margin: 10px;
`

export default (): React.ReactElement => {
  const [content, setContent] = useState({} as Post)
  const { postId } = useParams()

  useEffect(() => {
    const getContent = async () => {
      const data = await getPost(postId as string)
      setContent(data)
    }

    getContent()
  }, [postId])

  if (typeof content.content === 'string') {
    return (
      <ContentContainer>
        <ContentCard>
          <Markdown content={decodeContent(content.content)} />
        </ContentCard>
      </ContentContainer>
    )
  } else {
    return <h1>Loading...</h1>
  }
}
