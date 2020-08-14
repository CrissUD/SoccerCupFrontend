import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { Tournament } from 'src/app/models/Tournament';
import { TournamentService } from 'src/app/services/tournament.service';

@Component({
  selector: 'app-tournament-data',
  templateUrl: './tournament-data.component.html',
  styleUrls: ['./tournament-data.component.css']
})
export class TournamentDataComponent implements OnInit {

  @Output()
  estado = new EventEmitter<Tournament>();
  
  form: FormGroup;
  tournament: Tournament;

  constructor(private fb: FormBuilder, private tournamentService: TournamentService) {
    this.tournament = new Tournament();
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(){
    this.form = this.fb.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      type: ['', Validators.required],
      prize: ['', Validators.required]
    });
  }

  validationField(field){
    return this.form.get(field).invalid && this.form.get(field).touched
  }

  saveTournament(){
    if(!this.form.invalid){
      swal.fire({
        title: 'Espere',
        icon: 'info',
        text: 'Guardando Información',
        allowOutsideClick: false
      });
      swal.showLoading();
      this.tournament.name = this.form.value.name;
      this.tournament.country = this.form.value.country;
      this.tournament.type = this.form.value.type;
      this.tournament.prize = this.form.value.prize;
      let petition: Observable<any>;
      try{
        petition = this.tournamentService.postTournament(this.tournament);
        petition.subscribe(res =>{
          swal.fire({
            title: `Éxito al guardar el torneo ${res.name}`,
            icon: 'success',
            text: 'Información Guardada correctamente'
          });
          this.nextStep(this.tournament);
        });
      }catch(error){
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algún dato quedo incompleto'
        })
      }
    }else{
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algún dato quedo incompleto'
      })
    }
  }

  nextStep(tournament: Tournament){
    this.estado.emit(tournament);
  }
}
