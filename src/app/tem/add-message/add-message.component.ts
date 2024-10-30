import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; 
import { MessageserviceService } from '../messageservice.service';

@Component({
  selector: 'app-add-message',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-message.component.html',
  styles: []
})
export class AddMessageComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder, public messageService: MessageserviceService) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      nombre: ['', Validators.required],  
    });
  }

  addAlumno() {
    if (this.formGroup.valid) {
      const alumno = this.formGroup.value.nombre; 
      this.messageService.add(alumno);  
      this.formGroup.reset();  
    }
  }
}