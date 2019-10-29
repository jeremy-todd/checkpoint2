export interface IUser {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    token?: string;
    dob: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    favFood: string;
    favMovie: string;
    favArtist: string;
    hobbies: string;
}