import { ReviewData } from "../model/reviewData";
import VoteModel from "../model/voteModel";
import { VoteRepository } from "../repository/voteRepository";

class AddVoteService {

  constructor(private readonly voteRepository: VoteRepository) {}


  async addVoteToReview(
    reviewID: number,
    voteModel: VoteModel,
  ): Promise<boolean> {

    const review = this.voteRepository.findByIdReview(reviewID)

    if (!review) return false;

    const vote = new VoteModel(voteModel.vote, voteModel.userID);

    if (voteModel.vote.toLowerCase() === "upvote") {
      // const added = review.addUpVote(vote);
      const added = ReviewData.addUpVote(vote)
      if (added) {
        const reviewUpdated = this.voteRepository.save(ReviewData);
        return reviewUpdated !== null;
      }
    } else if (voteModel.vote.toLowerCase() === "downvote") {
      const added = ReviewData.addDownVote(vote);
      if (added) {
        const reviewUpdated = this.voteRepository.save(ReviewData);
        return reviewUpdated !== null;
      }
    }
    return false;
  }


  public async listAllReviews(): Promise<ReviewData[]> {
    const reviews = await this.voteRepository.find();
    return reviews;
  }
}

export default AddVoteService;
