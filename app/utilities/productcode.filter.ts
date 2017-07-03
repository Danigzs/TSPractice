import { Pipe, PipeTransform, Injectable} from '@angular/core';
import {Producto} from './../producto/producto';

@Pipe({
    name: 'searchcode',
    pure: false
})
@Injectable()
export class SearchCode implements PipeTransform {
    transform(value: any[], name: any, caseInsensitive: boolean): any {
        if (name !== undefined) {
            // filter users, users which match and return true will be kept, false will be filtered out
            return value.filter((producto) => {
                if (caseInsensitive) {
                    return (producto.code.toLowerCase().indexOf(name.toLowerCase()) !== -1);
                } else {
                    return (producto.code.indexOf(name) !== -1) ;
                }
            });
        }
        return value;
    }
}