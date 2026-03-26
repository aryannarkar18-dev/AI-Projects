import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, RouterLink, RouterLinkActive],
  template: `
    <mat-toolbar class="bg-gray-800 text-white shadow-[0_4px_6px_-1px_rgba(255,255,255,0.1)] fixed top-0 w-full z-[100] transition-all duration-300 border-b-4 border-stone-600">
      <span class="font-bold text-xl">ज्ञानदीप प्राथमिक शाळा</span>
      <span class="flex-grow"></span>
      
      <!-- Desktop Menu -->
      <div class="hidden md:flex">
        <a mat-button routerLink="/" routerLinkActive="bg-stone-800 text-white" [routerLinkActiveOptions]="{exact: true}" class="hover:bg-stone-800 text-white">मुख्यपृष्ठ</a>
        <a mat-button routerLink="/about" routerLinkActive="bg-stone-800 text-white" class="hover:bg-stone-800 text-white">आमच्याबद्दल</a>
        <a mat-button routerLink="/academics" routerLinkActive="bg-stone-800 text-white" class="hover:bg-stone-800 text-white">शैक्षणिक</a>
        <a mat-button routerLink="/admissions" routerLinkActive="bg-stone-800 text-white" class="hover:bg-stone-800 text-white">प्रवेश</a>
        <a mat-button routerLink="/gallery" routerLinkActive="bg-stone-800 text-white" class="hover:bg-stone-800 text-white">छायाचित्रे</a>
        <a mat-button routerLink="/contact" routerLinkActive="bg-stone-800 text-white" class="hover:bg-stone-800 text-white">संपर्क</a>
      </div>

      <!-- Mobile Menu -->
      <div class="md:hidden">
        <button mat-icon-button [matMenuTriggerFor]="menu">
          <mat-icon>menu</mat-icon>
        </button>
        <mat-menu #menu="matMenu">
          <a mat-menu-item routerLink="/" routerLinkActive="bg-stone-100 text-stone-900" [routerLinkActiveOptions]="{exact: true}">मुख्यपृष्ठ</a>
          <a mat-menu-item routerLink="/about" routerLinkActive="bg-stone-100 text-stone-900">आमच्याबद्दल</a>
          <a mat-menu-item routerLink="/academics" routerLinkActive="bg-stone-100 text-stone-900">शैक्षणिक</a>
          <a mat-menu-item routerLink="/admissions" routerLinkActive="bg-stone-100 text-stone-900">प्रवेश</a>
          <a mat-menu-item routerLink="/gallery" routerLinkActive="bg-stone-100 text-stone-900">छायाचित्रे</a>
          <a mat-menu-item routerLink="/contact" routerLinkActive="bg-stone-100 text-stone-900">संपर्क</a>
        </mat-menu>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    mat-toolbar {
      background-color: #1f2937 !important;
      color: white !important;
    }
  `]
})
export class Navbar {
}
