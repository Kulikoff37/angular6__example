export interface Customer {
    uuid: string;
    fullName: string;
    customerType: string;
    status?: any;
    cardNumber: string;
    phoneNumber: string;
    dateOfBirth: string;
    points?: any;
    coupons?: any;
    mainCardUUID: string;
    mainContactUUID: string;
    mainPriceUUID: string;
}

export interface Warehouse {
    uuid: string;
    subdivisionUUID: string;
    telephone: string;
    warehouseType: string;
    availabilityGroupUUID?: any;
    address: string;
    shortName: string;
    warehouseKind: string;
    name: string;
    tradeHall: boolean;
}

export interface Receiving {
    type?: any;
    warehouse: Warehouse;
    reservedToDate?: any;
    notReserve: boolean;
    telephone?: any;
    sendSMS: boolean;
    deliveryAddresses?: any;
    cityUUID: string;
    cityName: string;
}

export interface Order {
    uuid: string;
    customer: any;
    authorId: string;
    authorName: string;
    receiving: Receiving;
    documentType: string;
    customerName: string;
    comment?: any;
    draft: boolean;
    modificationRequired: boolean;
    paymentType?: any;
    mainWarehouseUUID: string;
    creationDate: string;
}
