import { Request, Response } from 'express';
import VoteService from '../services/addVoteService';
import AddVoteService from '../services/addVoteService';

class VoteController {
  static AddVoteService: AddVoteService;
  // constructor(private readonly addVoteService: AddVoteService) {}

  public static async addVote(req: Request, res: Response): Promise<any> {
    try {
      const voteModel = req.body;
      const { id } = req.params;
      const reviewID = Number(id);

    //   const voteData = await VoteService.create(reviewID, vote);
        const voteData = await this.AddVoteService.addVoteToReview(reviewID,voteModel)

        console.log(voteData)

      res.status(201).json(voteData);
    } catch (error) {
      // res.status(400).json({ message: error.message });
    }
  }

  public static async listAllReviews(req: Request, res: Response): Promise<void> {
    try {
      const reviews = await this.AddVoteService.listAllReviews();
      res.status(200).json(reviews);
    } catch (er) {
      // res.status(500).json({ message: er.message });
    }
  }
}

export default VoteController;