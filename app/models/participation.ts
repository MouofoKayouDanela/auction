export class Participation {
    id?: string;
    role?: string;
    savedBy?: string;
    idAuction?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;

    constructor(
        role?: string,
        savedBy?: string,
        idAuction?: string,
        createdAt?: Date,
        updatedAt?: Date,
        deletedAt?: Date,
    ) {
        this.role = role;
        this.savedBy = savedBy;
        this.idAuction = idAuction;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }

    public toMap(): any {
        return {
            role: this.role,
            savedBy: this.savedBy,
            idAuction: this.idAuction,
            createdAt: this.createdAt?.toDateString(),
            updatedAt: this.updatedAt?.toDateString(),
            deletedAt: this.deletedAt?.toDateString()
        };
    }

    public static fromMap(id: string, input: any): Participation {
        let participation = new Participation(
            input.role,
            input.savedBy,
            input.idAuction,
            input.createdAt === null || input.createdAt === undefined ? undefined : new Date(input.createdAt),
            input.updatedAt === null || input.updatedAt === undefined ? undefined : new Date(input.updatedAt),
            input.deletedAt === null || input.deletedAt === undefined ? undefined : new Date(input.deletedAt),
        );
        participation.id = id;

        return participation;
    }
}