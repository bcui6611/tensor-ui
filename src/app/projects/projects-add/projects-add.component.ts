import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia',
  'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
  'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan',
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania',
  'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah',
  'Vermont', 'Virgin Islands', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

@Component({
  selector: 'projects-add',
  templateUrl: './projects-add.component.html'
})
export class ProjectsAddComponent implements OnInit {
  public scmTypes = [
    {id: 1, type: 'Choose a scm type'},
    {id: 2, type: 'Manual'},
    {id: 3, type: 'Git'},
    {id: 4, type: 'Mercurial'},
    {id: 5, type: 'Subversion'}
  ];
  public model: any;
  public selectedSCMId: number;

  public search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map((term) => term.length < 2 ? []
        : states.filter((v) => new RegExp(term, 'gi').test(v)).splice(0, 10))

  public ngOnInit(): void {
    console.log('hello `ProjectsAdd` component');
  }

  public onChange(scmTypeId) {
    this.selectedSCMId = scmTypeId;
  }
}
