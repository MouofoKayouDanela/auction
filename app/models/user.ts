class User {
    id?: string;
    name?: string;
    surname?: string;
    email?: string;
    password?: string;
    role?: string;
    isLocked: boolean = false;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;

    constructor(
        name?: string, 
        surname?: string, 
        email?: string, 
        password?: string, 
        isLocked?: boolean, 
        role?: string, 
        createdAt?: Date, 
        updatedAt?: Date, 
        deletedAt?: Date
    ) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.isLocked = isLocked ?? false;
        this.role = role;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }

    public toMap(): any {
        return {
            name: this.name,
            surname: this.surname,
            email: this.email,
            password: this.password,
            isLocked: this.isLocked,
            createdAt: this.createdAt?.toISOString(),
            updatedAt: this.updatedAt?.toISOString(),
            deletedAt: this.deletedAt?.toISOString(),
        };

    };

    public static fromMap(id: string, input: any): User {
        let user = new User(
            input.name, 
            input.surname, 
            input.email, 
            input.password, 
            input.isLocked, 
            input.role, 
            input.createdAt, 
            input.updatedAt, 
            input.deletedAt
        );
        user.id = id;
        return user;
    }
}