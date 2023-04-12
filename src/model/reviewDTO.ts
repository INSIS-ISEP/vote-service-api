class ReviewDTO{
    idReview: number | undefined;
    reviewText: string;
    publishingDate: Date;
    approvalStatus: number;
    funFact: number;
    rating: string;
    vote: number;
  
    constructor(        
        reviewText: string,
        publishingDate: Date,
        approvalStatus: number,
        funFact: number,
        rating: string,
        vote: number,
      
    ) {
      this.reviewText = reviewText;
      this.publishingDate = publishingDate;
      this.approvalStatus = approvalStatus;
      this.funFact = funFact;
      this.rating = rating;
      this.vote = vote;
    }
  
}