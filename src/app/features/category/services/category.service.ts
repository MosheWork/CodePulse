import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddCategoryRequest } from '../models/add-category-reques.model';
import { Category } from '../models/category.model';
import { UpdateCategoryRequest } from '../models/update-category-request.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  addCategory(model: AddCategoryRequest): Observable<void> {
    return this.http.post<void>(
      `${environment.apiBaseUrl}/api/categories`,
      model
    );
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(
      `${environment.apiBaseUrl}/api/categories`
    );
  }

  getCategoryById(id: string): Observable<Category> {
    return this.http.get<Category>(
      `${environment.apiBaseUrl}/api/categories/${id}`
    );
  }

  updateCategory(
    id: string,
    updateCategoryRequest: UpdateCategoryRequest
  ): Observable<Category> {
   return this.http.put<Category>(
      `${environment.apiBaseUrl}/api/categories/${id}`,
      updateCategoryRequest
    );
  }
}
