import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }
  sendDataFormulario(data:any){
    return this.http.post<any>("http://localhost:3000/posts",data).pipe(map((res:any)=>{return res;}));
  }
  getDataFormulario(){
    return this.http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{return res;}));
  }
  updateDataFormulario(indice:any, data:any){
    return this.http.put<any>("http://localhost:3000/posts/"+indice,data).pipe(map((res:any)=>{return res;}));
  }
  deleteDataFormulario(indice:any){
    return this.http.delete<any>("http://localhost:3000/posts/"+indice).pipe(map((res:any)=>{return res;}));
  } 
}
