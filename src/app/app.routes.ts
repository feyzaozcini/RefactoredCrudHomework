import { Routes } from '@angular/router';
import { CategoryOperation } from './myComponenets/category-operation/category-operation';
import { ProductOperation } from './myComponenets/product-operation/product-operation';

export const routes: Routes = [
    {path:'',component:CategoryOperation},
    {path:'categories',component:CategoryOperation},
    {path:'products',component:ProductOperation}
];
