import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private _httpClient:HttpClient) { }

  sendDataFormulario(data:any){
    return this._httpClient.post<any>("http://localhost:3000/posts", data).pipe(map((res:any) =>{
      return res;
    }));
  }

  getDataFormulario(){
    return this._httpClient.get<any>("http://localhost:3000/posts").pipe(map((res:any) =>{
      return res;
    }));
  }

  updateDataFormulario(index:any, data:any){
    return this._httpClient.put<any>("http://localhost:3000/posts/" + index, data).pipe(map((res:any) =>{
      return res;
    }));
  }

  deleteDataFormulario(index:number){
    return this._httpClient.delete<any>("http://localhost:3000/posts/" + index).pipe(map((res:any) =>{
      return res;
    }));
  }
}
