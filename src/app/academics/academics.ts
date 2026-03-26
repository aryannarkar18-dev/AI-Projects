import { Component } from '@angular/core';

@Component({
  selector: 'app-academics',
  standalone: true,
  template: `
    <div class="p-8 max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-blue-900 mb-6">शैक्षणिक विभाग</h1>
      <p class="text-lg text-gray-700 mb-8">आमच्या शाळेत पहिली ते चौथीपर्यंतचे वर्ग आहेत. आम्ही सर्व विषयांचे सखोल शिक्षण देतो आणि विद्यार्थ्यांच्या सर्वांगीण विकासावर भर देतो.</p>
      
      <h2 class="text-3xl font-bold mb-6 text-blue-900">अभ्यासक्रम</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
          <h3 class="text-xl font-semibold mb-2">भाषा</h3>
          <p class="text-gray-600">मराठी, हिंदी आणि इंग्रजी विषयांचे सखोल ज्ञान.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
          <h3 class="text-xl font-semibold mb-2">गणित</h3>
          <p class="text-gray-600">तार्किक विचार आणि गणिती कौशल्यांचा विकास.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
          <h3 class="text-xl font-semibold mb-2">परिसर अभ्यास</h3>
          <p class="text-gray-600">विज्ञान आणि सामाजिक शास्त्रांची ओळख.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
          <h3 class="text-xl font-semibold mb-2">कला आणि क्रीडा</h3>
          <p class="text-gray-600">चित्रकला, संगीत आणि शारीरिक शिक्षण.</p>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class Academics {}
