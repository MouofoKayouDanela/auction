export class Auction {
    id?: string;
    title?: string;
    startDate?: Date;
    endDate?: Date;
    status?: string;
    admin?: string;
    minPrice?: number;
    createdAt?: Date;
    updatedAt?: Date;
    canceledAt?: Date;
    deletedAt?: Date;

    constructor(
        title?: string,
        startDate?: Date,
        endDate?: Date,
        status?: string,
        admin?: string,
        minPrice?: number,
        createdAt?: Date,
        updatedAt?: Date,
        canceledAt?: Date,
        deletedAt?: Date,
    ) {
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status;
        this.admin = admin;
        this.minPrice = minPrice;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.canceledAt = canceledAt;
        this.deletedAt = deletedAt;
    }

    public toMap(): any {
        return {
            title: this.title,
            startDate: this.startDate?.toDateString(),
            endDate: this.endDate?.toDateString(),
            status: this.status,
            admin: this.admin,
            minPrice: this.minPrice,
            createdAt: this.createdAt?.toDateString(),
            canceledAt: this.canceledAt?.toDateString(),
            updatedAt: this.updatedAt?.toDateString(),
            deletedAt: this.deletedAt?.toDateString()
        };
    }

    public static fromMap(id: string, input: any): Auction {
        let auction = new Auction(
            input.title,
            new Date(input.startDate),
            new Date(input.endDate),
            input.status,
            input.admin,
            input.minPrice,
            input.createdAt === null || input.createdAt === undefined ? undefined : new Date(input.createdAt),
            input.canceledAt === null || input.canceledAt === undefined ? undefined : new Date(input.canceledAt),
            input.updatedAt === null || input.updatedAt === undefined ? undefined : new Date(input.updatedAt),
            input.deletedAt === null || input.deletedAt === undefined ? undefined : new Date(input.deletedAt)
        );
        auction.id = id;

        return auction;
    }
}