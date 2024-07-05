export class Phone {
    id?: string;
    brand?: string;
    os?: string;
    screen?: number;
    ram?: number;
    rom?: number;
    frontalCamera?: number;
    backCamera?: number;
    description?: string;
    price?: number;
    photos?: Array<string>;
    idAuction?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;

    constructor(
        brand?: string,
        os?: string,
        screen?: number,
        ram?: number,
        rom?: number,
        frontalCamera?: number,
        backCamera?: number,
        description?: string,
        price?: number,
        photos?: Array<string>,
        idAuction?: string,
        createdAt?: Date,
        updatedAt?: Date,
        deletedAt?: Date,
    ) {
        this.brand = brand;
        this.os = os;
        this.screen = screen;
        this.ram = ram;
        this.rom = rom;
        this.frontalCamera = frontalCamera;
        this.backCamera = backCamera;
        this.description = description;
        this.price = price;
        this.photos = photos;
        this.idAuction = idAuction;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }

    public toMap() {
        return {
            brand: this.brand,
            os: this.os,
            screen: this.screen,
            ram: this.ram,
            rom: this.rom,
            frontalCamera: this.frontalCamera,
            backCamera: this.backCamera,
            description: this.description,
            price: this.price,
            photos: this.photos,
            idAuction: this.idAuction,
            createdAt: this.createdAt?.toDateString(),
            updatedAt: this.updatedAt?.toDateString(),
            deletedAt: this.deletedAt?.toDateString()
        };
    }

    public static fromMap(id: string, input: any) : Phone{
        let phone = new Phone(
            input.brand,
            input.os,
            input.screen,
            input.ram,
            input.rom,
            input.frontalCamera,
            input.backCamera,
            input.description,
            input.price,
            input.photos,
            input.idAuction,
            input.createdAt === null || input.createdAt === undefined ? undefined : new Date(input.createdAt),
            input.updatedAt === null || input.updatedAt === undefined ? undefined : new Date(input.updatedAt),
            input.deletedAt === null || input.deletedAt === undefined ? undefined : new Date(input.deletedAt),
        );
        phone.id = id;

        return phone;
    }
}