import { Repository} from 'typeorm';
import { ReviewData } from '../model/reviewData';

export class VoteRepository extends Repository<ReviewData> {

    async findByIdReview(id: number): Promise<ReviewData[]> {
        return this.createQueryBuilder('r')
          .where('r.idReview = :status', { id })
          .orderBy('r.publishingDate', 'DESC')
          .getMany();
      }

}
