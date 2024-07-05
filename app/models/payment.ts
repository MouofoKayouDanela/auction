export class Payment {
    id?: string;
    amount?: number;
    doneBy?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;

    constructor(
        amount?: number,
        doneBy?: string,
        createdAt?: Date,
        updatedAt?: Date,
        deletedAt?: Date
    ) {
        this.amount = amount;
        this.doneBy = doneBy;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }

    public toMap() : any {
        return {
            amount: this.amount,
            doneBy: this.doneBy,
            createdAt: this.createdAt?.toDateString(),
            updatedAt: this.updatedAt?.toDateString(),
            deletedAt: this.deletedAt?.toDateString()
        };
    }

    public static fromMap(id: string, input: any): Payment {
        let payment = new Payment(
            input.amount,
            input.doneBy,
            input.createdAt === null || input.createdAt === undefined ? undefined : new Date(input.createdAt),
            input.updatedAt === null || input.updatedAt === undefined ? undefined : new Date(input.updatedAt),
            input.deletedAt === null || input.deletedAt === undefined ? undefined : new Date(input.deletedAt),
        );
        payment.id = id;

        return payment;
    }
}