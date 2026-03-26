import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="p-8 max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-blue-900 mb-6">आमच्याबद्दल</h1>
      <p class="text-lg text-gray-700 mb-6">ज्ञानदीप प्राथमिक शाळा ही विद्यार्थ्यांच्या सर्वांगीण विकासासाठी कटिबद्ध आहे. आम्ही १९९५ पासून दर्जेदार शिक्षण देत आहोत.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white p-6 rounded-xl shadow-md">
          <h2 class="text-2xl font-semibold mb-3 text-blue-800">दृष्टी (Vision)</h2>
          <p class="text-gray-600">प्रत्येक विद्यार्थ्याला उत्तम शिक्षण देऊन त्यांना भविष्यातील आव्हानांसाठी तयार करणे आणि एक जबाबदार नागरिक घडवणे.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-md">
          <h2 class="text-2xl font-semibold mb-3 text-blue-800">ध्येय (Mission)</h2>
          <p class="text-gray-600">विद्यार्थ्यांमध्ये ज्ञान, कौशल्य आणि नैतिक मूल्यांची जोपासना करणे आणि त्यांना सर्वांगीण विकासासाठी प्रोत्साहित करणे.</p>
        </div>
      </div>
      
      <h2 class="text-3xl font-bold mt-10 mb-6 text-blue-900">शाळेची वैशिष्ट्ये</h2>
      <ul class="list-disc list-inside text-lg text-gray-700 space-y-2">
        <li>अद्ययावत संगणक प्रयोगशाळा</li>
        <li>विशाल क्रीडांगण</li>
        <li>अनुभवी आणि प्रशिक्षित शिक्षकवृंद</li>
        <li>नियमित सहली आणि सांस्कृतिक कार्यक्रम</li>
      </ul>
    </div>
  `,
  styles: []
})
export class About {}
