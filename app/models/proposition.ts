export class Proposition {
  id?: string;
  montant?: number;
  participation?: string;
  last: boolean = false;
  createdAt?: Date;

  constructor(
    montant?: number,
    participation?: string,
    last: boolean = false,
    createdAt?: Date,
  ) {
    this.montant = montant;
    this.participation = participation;
    this.last = last;
    this.createdAt = createdAt;
  }

  public toMap() : any {
    return {
      montant: this.montant,
      participation: this.participation,
      last: this.last,
      createdAt: this.createdAt?.toDateString()
    };
  }

  public static fromMap(id: string, input: any) {
    let proposition = new Proposition(
      input.montant,
      input.participation,
      input.last,
      input.createdAt === null || input.createdAt === undefined ? undefined : new Date(input.createdAt)
    );
    proposition.id = id;

    return proposition;
  }
}