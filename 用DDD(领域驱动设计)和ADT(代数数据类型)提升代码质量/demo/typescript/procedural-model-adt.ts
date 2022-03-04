type DraftPost = {
  type: 'DraftPost';
  content: string;
}

type ReviewingPost = {
  type: 'ReviewingPost';
  content: string;
}

type PublishedPost = {
  type: 'PublishedPost';
  content: string;
}

const edit = (post: DraftPost, newContent: string): DraftPost => {
  return {
    ...post,
    content: newContent
  }
}

const review = (post: DraftPost): ReviewingPost => {
  return {
    type: 'ReviewingPost',
    content: post.content
  }
}

const approve = (post: ReviewingPost): PublishedPost => {
  return {
    type: 'PublishedPost',
    content: post.content
  }
}

const reject = (post: ReviewingPost): DraftPost => {
  return {
    type: 'DraftPost',
    content: post.content
  }
}