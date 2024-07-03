class Role {
    id?: string;
    intitule?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;

    constructor(
        intitule: string, 
        createdAt?: Date,
        updatedAt?: Date, 
        deletedAt?: Date
    ) {
        this.intitule = intitule;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }

    public toMap() {
        return {
            intitule: this.intitule,
            createdAt: this.createdAt?.toISOString(),
            updatedAt: this.updatedAt?.toISOString(),
            deletedAt: this.deletedAt?.toISOString(),
        };
    }

    public static fromMap(id: string, input: any) : Role {
        let role = new Role(
            input.intitule,
            input.createdAt,
            input.updatedAt,
            input.deletedAt
        );
        role.id = id;

        return role;
    }
}