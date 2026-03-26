import { Component } from '@angular/core';

@Component({
  selector: 'app-admissions',
  standalone: true,
  template: `
    <div class="p-8 max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-blue-900 mb-6">प्रवेश प्रक्रिया</h1>
      <p class="text-lg text-gray-700 mb-8">ज्ञानदीप प्राथमिक शाळेत प्रवेश घेण्यासाठी खालील प्रक्रिया आणि कागदपत्रे आवश्यक आहेत:</p>
      
      <div class="bg-white p-8 rounded-xl shadow-md mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-blue-800">आवश्यक कागदपत्रे</h2>
        <ul class="list-disc list-inside text-lg text-gray-700 space-y-2">
          <li>विद्यार्थ्याचा जन्म दाखला (मूळ प्रत आणि झेरॉक्स)</li>
          <li>विद्यार्थ्याचे आधार कार्ड</li>
          <li>पालकांचे आधार कार्ड</li>
          <li>मागील शाळेचा शाळा सोडल्याचा दाखला (TC)</li>
          <li>पासपोर्ट आकाराचे २ फोटो</li>
        </ul>
      </div>

      <div class="bg-blue-50 p-8 rounded-xl shadow-md">
        <h2 class="text-2xl font-semibold mb-4 text-blue-800">प्रवेश वेळापत्रक</h2>
        <p class="text-lg text-gray-700">प्रवेश प्रक्रिया दरवर्षी मार्च ते मे महिन्यादरम्यान सुरू असते. अधिक माहितीसाठी कृपया शाळेच्या कार्यालयाशी संपर्क साधा.</p>
      </div>
    </div>
  `,
  styles: []
})
export class Admissions {}
