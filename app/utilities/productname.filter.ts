import { Pipe, PipeTransform, Injectable} from '@angular/core';
import {Producto} from './../producto/producto';

@Pipe({
    name: 'search',
    pure: false
})
@Injectable()
export class SearchPipe implements PipeTransform {
    transform(value: any[], name: any, caseInsensitive: boolean): any {
        if (name !== undefined) {
            // filter users, users which match and return true will be kept, false will be filtered out
            return value.filter((producto) => {
                if (caseInsensitive) {
                    return (producto.name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
                } else {
                    return (producto.name.indexOf(name) !== -1) ;
                }
            });
        }
        return value;
    }
}