import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';



export interface Usuario{
  nomUsuario: string;
  correoUsuario: string;
  passUsuario: string;
  repassUsuario: string;
}

const USER_KEY = 'my-usuarios';

@Injectable({
  providedIn: 'root'
})

export class RegistroserviceService {

  private _storage: Storage
  newUsuario: Usuario = <Usuario>{};
  menuController: any;

  constructor(private storage: Storage) {
    this.init();
  }

  async init(){
    const storage = await this.storage.create();
    this._storage= storage;
  }

  async addUsuario(dato: Usuario):Promise<any>{
    return this.storage.get(USER_KEY).then((datos : Usuario[])=>{
      if (datos) {
        datos.push(dato);
        return this.storage.set(USER_KEY, datos);
      }else{
        return this.storage.set(USER_KEY, [dato]);
      }

    })

  }

  async getUsuarios(): Promise<Usuario[]>{
    return this.storage.get(USER_KEY);
  }

  
  mostrarMenu()
  {
    this.menuController.open('first');
  }
  

}//class
