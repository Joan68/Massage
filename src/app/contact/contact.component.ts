import { ConnectionService } from '../connection.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, HostListener } from '@angular/core';
import { ContactMe_Data} from './contact';          // ton modèle de données (modèle d'objetss)
import {ContactService} from './contact.service';   //ton service

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

contactForm: FormGroup;
disabledSubmitButton: boolean = true;
optionsSelect: Array<any>;

  @HostListener('input') oninput() {

    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  ContactMe_current: ContactMe_Data= { name:null,email:null,subject:null,message:null };//On crée un objet sur le modèle de ContactMe_Data (voir contact.ts), dans lequel on va mettre toutes les infos du form
  
  constructor(private fb: FormBuilder, private connectionService: ConnectionService, private ContactService : ContactService) { // on oublie pas de rajouter le service dans le constructeur

  // this.contactForm = fb.group({
  //   'contactFormName': ['', Validators.required],
  //   'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
  //   'contactFormSubjects': ['', Validators.required],
  //   'contactFormMessage': ['', Validators.required],
  //   'contactFormCopy': [''],
  //   });
  }
  SendMessage(form)
  {
    console.log('Contenu de ton form : ',this.ContactMe_current);

    this.ContactService.post_SendEmail(form.values).subscribe((res: any)=>{
      console.log("Réponse de l'API : ", res);
    });
  }
  ngOnInit() {

  this.optionsSelect = [
    { value: 'Feedback', label: 'Feedback' },
    { value: 'Report a bug', label: 'Report a bug' },
    { value: 'Feature request', label: 'Feature request' },
    { value: 'Other stuff', label: 'Other stuff' },
    ];
  }

  // onSubmit() {
  //   this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
  //     alert('Your message has been sent.');
  //     this.contactForm.reset();
  //     this.disabledSubmitButton = true;
  //   }, error => {
  //     console.log('Error', error);
  //   });
  // }

  }