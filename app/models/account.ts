export class Account {
    id?: string;
    amount?: number;
    idUser?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;

    constructor(
        amount?: number,
        idUser?: string,
        createdAt?: Date,
        updatedAt?: Date,
        deletedAt?: Date
    ) {
        this.amount = amount;
        this.idUser = idUser;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }

    public toMap(): any {
        return {
            amount: this.amount,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            deletedAt: this.deletedAt
        };
    }

    public static fromMap(id: string, input: any) : Account {
        let account = new Account(
            input.account,
            input.idUser,
            input.createdAt === null || input.createdAt === undefined ? undefined : new Date(input.createdAt),
            input.updatedAt === null || input.updatedAt === undefined ? undefined : new Date(input.updatedAt),
            input.deletedAt === null || input.deletedAt === undefined ? undefined : new Date(input.deletedAt)
        );
        account.id = id;

        return account;
    }
}