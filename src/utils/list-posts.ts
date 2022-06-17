interface Post {
  id: string
  title: string
  author: string
  blurb: string
  published: string
}

export default async (): Promise<Post[]> => {
  const response = await fetch(`${process.env.REACT_APP_CMS_URL ||' https://lorge.herokuapp.com'}/posts`)

  if (response.ok) {
    const payload = await response.json()

    return payload.posts
  } else {
    throw new Error('something went wrong')
  }
}
