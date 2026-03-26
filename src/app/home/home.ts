import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <div class="p-8 max-w-5xl mx-auto">
      <div class="bg-white p-12 rounded-2xl shadow-lg mb-12 text-center">
        <h1 class="text-5xl font-bold text-gray-900 mb-4">ज्ञानदीप प्राथमिक शाळा</h1>
        <p class="text-2xl text-gray-600">उत्तम शिक्षण, उज्ज्वल भविष्य</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
          <mat-icon class="text-blue-600 text-4xl mb-4">school</mat-icon>
          <h2 class="text-2xl font-semibold mb-2">अनुभवी शिक्षक</h2>
          <p class="text-gray-600">आमचे शिक्षक अत्यंत अनुभवी आणि समर्पित आहेत.</p>
        </div>
        <div class="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
          <mat-icon class="text-blue-600 text-4xl mb-4">emoji_events</mat-icon>
          <h2 class="text-2xl font-semibold mb-2">उत्कृष्ट निकाल</h2>
          <p class="text-gray-600">आमच्या शाळेचा निकाल नेहमीच उत्कृष्ट असतो.</p>
        </div>
        <div class="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
          <mat-icon class="text-blue-600 text-4xl mb-4">security</mat-icon>
          <h2 class="text-2xl font-semibold mb-2">सुरक्षित वातावरण</h2>
          <p class="text-gray-600">विद्यार्थ्यांसाठी सुरक्षित आणि पोषक वातावरण.</p>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class Home {}
