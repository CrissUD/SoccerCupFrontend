import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import swal from 'sweetalert2';
import { TeamService } from 'src/app/services/team.service';
import { Team } from 'src/app/models/Team';

@Component({
  selector: 'app-team-data',
  templateUrl: './team-data.component.html',
  styleUrls: ['./team-data.component.css']
})
export class TeamDataComponent implements OnInit {

  @Output()
  estado = new EventEmitter<boolean>();
  
  form: FormGroup;
  team: Team;

  constructor(private fb: FormBuilder, teamService: TeamService) { 
    this.team = new Team();
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(){
    this.form = this.fb.group({
      name: ['', Validators.required],
      coach: ['', Validators.required],
      leader: ['', Validators.required]
    });
  }

  validationField(field){
    return this.form.get(field).invalid && this.form.get(field).touched
  }

  saveTeams(){
    
  }
}
