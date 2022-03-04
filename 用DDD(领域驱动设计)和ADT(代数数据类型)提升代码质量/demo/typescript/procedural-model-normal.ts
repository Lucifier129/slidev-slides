export class Post {
  constructor(private isDraft: boolean, private isReviewing: boolean, private isPublished: boolean, private content: string) {}
  edit(content: string) {
    if (!this.isDraft) {
      throw new Error('Post is not in draft stage');
    }
    this.content = content;
  }
  review() {
    if (!this.isDraft) {
      throw new Error('Post is not in draft stage');
    }
    this.isDraft = false;
    this.isReviewing = true;
  }
  publish() {
    if (!this.isReviewing) {
      throw new Error('Post is not in reviewing stage');
    }
    this.isReviewing = false;
    this.isPublished = true;
  }
  reject() {
    if (!this.isReviewing) {
      throw new Error('Post is not in reviewing stage');
    }
    this.isReviewing = false;
    this.isDraft = true;
  }
  approve() {
    if (!this.isReviewing) {
      throw new Error('Post is not in reviewing stage');
    }
    this.isReviewing = false;
    this.isPublished = true;
  }
}

declare const post: Post


post.reject()