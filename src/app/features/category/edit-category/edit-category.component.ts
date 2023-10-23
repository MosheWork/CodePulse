import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
})
export class EditCategoryComponent implements OnInit, OnDestroy {
  id: string | null = null;
  paramsSubscription?: Subscription;
  category?: Category;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.paramsSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');

        if (this.id) {
          //get the data from the API for this category Id
          this.categoryService.getCategoryById(this.id).subscribe({
            next: (response) => {
              this.category = response;
            },
          });
        }
      },
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }
}
