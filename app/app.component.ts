import {Component} from '@angular/core';
import {Student} from './student';
@Component({
    selector: 'custom-event',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    title = 'Update this';
	fullName = '';
	studentObj = new Student(1, 'Shweta', 'Srivastava');
	saveData(emp) {
	    this.fullName = emp.fname + ' ' + emp.lname ;
    }		
} 