import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  template: `
    <div class="p-8 max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold text-blue-900 mb-8 text-center">शाळेतील आठवणी</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div class="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <img src="https://picsum.photos/seed/school1/400/300" alt="शाळा" class="w-full h-64 object-cover" referrerpolicy="no-referrer" />
        </div>
        <div class="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <img src="https://picsum.photos/seed/school2/400/300" alt="शाळा" class="w-full h-64 object-cover" referrerpolicy="no-referrer" />
        </div>
        <div class="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <img src="https://picsum.photos/seed/school3/400/300" alt="शाळा" class="w-full h-64 object-cover" referrerpolicy="no-referrer" />
        </div>
        <div class="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <img src="https://picsum.photos/seed/school4/400/300" alt="शाळा" class="w-full h-64 object-cover" referrerpolicy="no-referrer" />
        </div>
        <div class="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <img src="https://picsum.photos/seed/school5/400/300" alt="शाळा" class="w-full h-64 object-cover" referrerpolicy="no-referrer" />
        </div>
        <div class="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <img src="https://picsum.photos/seed/school6/400/300" alt="शाळा" class="w-full h-64 object-cover" referrerpolicy="no-referrer" />
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class Gallery {}
