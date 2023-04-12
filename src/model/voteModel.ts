// import { Embedded } from 'typeorm';
import * as crypto from 'crypto';

// @Embedded()
export class VoteModel {
  public vote: string;
  public userID: number;

  constructor(vote: string, userID: number) {
    this.vote = vote;
    this.userID = userID;
  }

  validate() {
    if (!this.userID || !this.vote) {
      throw new Error("Values are required");
    }
  }

  public equals(o: VoteModel): boolean {
    if (this === o) return true;
    if (o == null || this.constructor !== o.constructor) return false;
    return this.vote === o.vote && this.userID === o.userID;
  }

  public hashCode(): string {
    const hash = crypto.createHash('sha256').update(this.vote + this.userID.toString()).digest('hex');
    return hash;
  }
}

export default VoteModel
