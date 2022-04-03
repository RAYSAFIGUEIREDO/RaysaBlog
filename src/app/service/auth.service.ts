
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../model/User";
import { UserLogin } from "../model/User.Login";

@Injectable({
providedIn: 'root'
})
export class AuthServicce{

    constructor(
private http: HttpClient
) { }

    entrar(userLogin: UserLogin):Observable<UserLogin>{
return this.http.post<UserLogin>('http://localhost:boaz/usuario/logar', userLogin)
    }

cadastrar(user: User): Observable<User>{
    return this.http.post<User>('http://localhost:boaz/usuario/cadastrar', user)
}

}