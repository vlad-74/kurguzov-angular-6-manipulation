import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'userFilter',
  pure: false
})
export class UserFilter implements PipeTransform {
  transform(items: any[], searchValue) {
    if (items && items.length) {
      return items.filter(item => {
        const {email = '', name = '', username = '', id = '', website = ''} = item;
        if ( searchValue ) {
          return email.toLowerCase().includes(searchValue.toLowerCase()) ||
            name.toLowerCase().includes(searchValue.toLowerCase()) ||
            username.toLowerCase().includes(searchValue.toLowerCase()) ||
            String(id).toLowerCase().includes(searchValue.toLowerCase()) ||
            website.toLowerCase().includes(searchValue.toLowerCase());
        }
        return true;
      });
    } else {
      return items;
    }
  }
}