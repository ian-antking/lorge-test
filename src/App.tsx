import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import GlobalStyle from './styles'
import styled, { ThemeProvider } from 'styled-components'
import themesLibrary from './themes'

import Header from './components/Header'
import PostCards from './components/PostCards'
import PostContent from './components/PostContent'

import listPosts from './utils/list-posts'

interface Post {
  id: string
  title: string
  author: string
  blurb: string
  published: string
}

const AppContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  min-height: 100vh;
  height: 100%;
`
const ContentContainer = styled('main')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const App: React.FC = (): React.ReactElement => {
  const [posts, setPosts] = useState<Post[]>([])
  const getPosts = async () => {
    const data = await listPosts()

    setPosts(data)
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <ThemeProvider theme={themesLibrary.default}>
      <GlobalStyle />
      <AppContainer className="App">
        <Header />
        <ContentContainer>
          <Routes>
            <Route path="/" element={<PostCards posts={posts} />} />
            <Route path="/post/:postId" element={<PostContent />} />
          </Routes>
        </ContentContainer>
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
