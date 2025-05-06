import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms'
import { SolicitudService } from '../../services/solicitud.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

formCrearEstudiante!: FormGroup

constructor(private  AdmiSolicitud: SolicitudService,  private fb : FormBuilder ){
  this.formCrearEstudiante = this.fb.group({
    name: ['', []],
    email: ['', []],
    paymentsPending: ['', []],
    delayMinutes: [0]
  })
}

setDelay(min: number) {
  this.formCrearEstudiante.get('delayMinutes')?.setValue(min);
}
sendNotification() {
  this.AdmiSolicitud.sendNotification(this.formCrearEstudiante.value).subscribe({
    next: (resApi: any)=>{
      Swal.fire({
        icon:"success",
        title: `El mensaje se enviara en el tiempo solicitado`,
        text: "Su mensaje sera enviado con exito"
      })
      this.formCrearEstudiante.reset();
    },
    error: (error:any) => {
      console.log(error);
      Swal.fire ({
        icon:"error",
        title: "Mensaje no enviado",
        text: "Por favor revisa que todos los campos del formulario esten diligenciados correctamente"
      })
    }
  })
}
}
