import { Component , signal, inject, OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { CategoryApi } from '../../DataAccess/category-api';
import { CategoryResponseModel } from '../../Models/Categories/CategoryResponseModel';
import { createCategoryForm,toCreateCategoryRequest } from '../../Valications/Categories/CreateCategoryFormFactory';
import { updateCategoryForm,toUpdateCategoryRequest } from '../../Valications/Categories/UpdateCategoryFormFactory';

//burada dikakt direkt http degil bir data access service inject edeceğiz.

@Component({
  selector: 'app-category-operation',
  imports: [ReactiveFormsModule],
  templateUrl: './category-operation.html',
  styleUrl: './category-operation.css',
})
export class CategoryOperation {
  
}
