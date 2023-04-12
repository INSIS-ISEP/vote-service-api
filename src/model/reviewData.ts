import VoteModel from "./voteModel";

export class ReviewData {
  // private idReview: number;
  // title: string;
  // content: string;
  // private rating: number;
  // private approvalStatus: string;
  // private publishingDate: Date;
 
  public static upVote: VoteModel[];
  public static downVote: VoteModel[];
  
  // constructor(
  //   title: string,
  //   content: string,
  //   rating: number,
  //   approvalStatus: string,
  //   publishingDate: Date,
  //   userId: number,
  //   productId: number
  // ) {
  //   this.title = title;
  //   this.content = content;
  //   this.rating = rating;
  //   this.approvalStatus = approvalStatus;
  //   this.publishingDate = publishingDate;
  //   this.userId = userId;
  //   this.productId = productId;
  // }


  constructor(upVote: VoteModel[], downVote: VoteModel[]) {
    ReviewData.upVote = upVote;
    ReviewData.downVote = downVote;
  }

  static addUpVote(upVote: VoteModel): boolean {
    // if (this.approvalStatus !== "approved") {
    //   return false;
    // }
  
    if (!this.upVote.includes(upVote)) {
      this.upVote.push(upVote);
      return true;
    }
    
    return false;
  }
  
  static addDownVote(downVote: VoteModel): boolean {
    // if (this.approvalStatus !== "approved") {
    //   return false;
    // }
  
    if (!this.downVote.includes(downVote)) {
      this.downVote.push(downVote);
      return true;
    }
  
    return false;
  }
  
}
