import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-gray-800 text-gray-300 p-8 text-center mt-12">
      <p class="mb-2">&copy; 2026 ज्ञानदीप प्राथमिक शाळा. सर्व हक्क राखीव.</p>
      <p class="text-sm">संपर्क: 020-12345678 | ईमेल: info@dnyandeep.edu.in</p>
    </footer>
  `,
  styles: []
})
export class Footer {}
