interface Post {
  id: string
  title: string
  author: string
  blurb: string
  published: string
  content: string
}

export default async (id: string): Promise<Post> => {
  const response = await fetch(`${process.env.REACT_APP_CMS_URL ||' https://lorge.herokuapp.com'}/posts/${id}`)

  if (response.ok) {
    const payload = await response.json()

    return payload.post
  } else {
    throw new Error('something went wrong')
  }
}
