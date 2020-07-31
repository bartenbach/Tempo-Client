import { Component, OnInit } from '@angular/core';
import {GoalService} from '../shared/goal.service';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.css']
})
export class GoalListComponent implements OnInit {
  goals: Array<any>;

  constructor(private goalService: GoalService) { }

  ngOnInit(): void {
    this.goalService.getAll().subscribe(data => {
      this.goals = data;
    });
  }

}
