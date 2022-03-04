export class DraftPost {
  constructor(private content: string) {}
  edit(content: string) {
    this.content = content;
  }
  review() {
    return new ReviewingPost(this.content);
  }
}

class ReviewingPost {
  constructor(private content: string) {}
  publish() {
    return new PublishedPost(this.content);
  }
  reject() {
    return new DraftPost(this.content);
  }
  approve() {
    return new PublishedPost(this.content);
  }
}

class PublishedPost {
  constructor(private content: string) {}
  getContent() {
    return this.content;
  }
}


const draftPost = new DraftPost('draft post content');
const reviewingPost = draftPost.review();
const publishedPost = reviewingPost.approve();
const publishedPostContent = publishedPost.getContent();

console.log(publishedPostContent);