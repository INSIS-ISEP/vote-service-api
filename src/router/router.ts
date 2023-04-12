import axios from 'axios';
import { Router } from 'express';
import { Request, Response } from 'express';
import VoteController from '../controllers/voteController';
import AddVoteService from '../services/addVoteService';
import { VoteRepository } from '../repository/voteRepository';

// const addVoteService = new AddVoteService();
// const voteController = new VoteController();

const router = Router();

// router.post('localhost:8080/reviews/:reviewID/vote', VoteController.addVote);
// router.post('/reviews/:id/vote', (req: Request, res: Response) => {
//     voteController.addVote(req, res);
//   });

// router.get('/reviews', VoteController.listAllReviews);



router.get('/reviews', async (req: Request, res: Response) => {
    try {
      const response = await axios.get('http://localhost:8080/reviews/23');
      const reviews = response.data;
      res.json(reviews);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

export default router;