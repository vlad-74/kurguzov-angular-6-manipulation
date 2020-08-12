import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class IfHasAccessService {

  permissions: string[] = ['d','b','c','a'];
  
  constructor() { }

  public hasAccess(permissions) {
    if(permissions) { return this.allElementInArray(this.permissions, permissions.split(''))}
  }

  public hasAccessAny(permissions) {
    if(permissions) { return this.someElementInArray(this.permissions, permissions.split(''))}
  }

  someElementInArray(arr, permissions){
    const result = []
    permissions.forEach( item => { arr.forEach(el => { result.push(permissions.indexOf(el))})})
    return result.some(item => item != -1)
  }

  allElementInArray(arr, permissions){
    const result = []
    permissions = this.unique(permissions)
    permissions.forEach( item => { arr.forEach(el => { result.push(permissions.indexOf(el))})})
    return arr.length === result.filter(item => item == 0).length
  }

  unique(item) {
    return item.filter((v, i, a) => a.indexOf(v) === i);
  }
}