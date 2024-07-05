import { onValue, ref } from "firebase/database";
import { User } from "../models/user";
import { database } from "../firebase_config";

export class UserController {
    private path = "users";

    public getAll() {
        const usersRef = ref(database, this.path);
        console.log("hhee")
        onValue(usersRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
        });
    }
}