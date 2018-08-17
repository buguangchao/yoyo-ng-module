import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { SettingsService } from '../../theme/index';

@Component({
  selector   : 'layout-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  constructor(public settings: SettingsService, public msgSrv: NzMessageService) {
  }
}
