import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplitComponent } from './split/split.component';
import { ClipboardComponent } from './clipboard/clipboard.component';
import { PrintComponent } from './print/print.component';

const routes: Routes = [
    { path: 'split', component: SplitComponent },
    { path: 'clipboard', component: ClipboardComponent },
    { path: 'print', component: PrintComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherRoutingModule { }
