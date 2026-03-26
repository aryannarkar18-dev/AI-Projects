import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <div class="p-8 max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-blue-900 mb-6">संपर्क</h1>
      <p class="text-lg text-gray-700 mb-8">आमच्या शाळेबद्दल अधिक माहितीसाठी किंवा प्रवेशासाठी तुम्ही आमच्याशी संपर्क साधू शकता.</p>
      
      <div class="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-600">
        <h2 class="text-2xl font-semibold mb-4 text-blue-800">शाळेचा पत्ता</h2>
        <p class="text-lg text-gray-700 mb-2"><strong>पत्ता:</strong> ज्ञानदीप प्राथमिक शाळा, प्लॉट नं. १२३, शिवाजी नगर, पुणे - ४११००५.</p>
        <p class="text-lg text-gray-700 mb-2"><strong>फोन:</strong> 020-12345678, 020-87654321</p>
        <p class="text-lg text-gray-700 mb-2"><strong>ईमेल:</strong> info@gyandeep-school.edu.in</p>
        <p class="text-lg text-gray-700"><strong>वेळ:</strong> सकाळी ९:०० ते दुपारी ४:००</p>
      </div>
    </div>
  `,
  styles: []
})
export class Contact {}
