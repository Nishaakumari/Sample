import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadListingsComponent } from './lead-listings/lead-listings.component';
import { LeadGComponent } from './lead-listings/lead-g/lead-g.component';
import { LeadToolsComponent } from './lead-listings/lead-tools/lead-tools.component';
import { DownloadPdfComponent } from './lead-listings/download-pdf/download-pdf.component';
import { DownloadExelComponent } from './lead-listings/download-exel/download-exel.component';



@NgModule({
  declarations: [
    LeadListingsComponent,
    LeadGComponent,
    LeadToolsComponent,
    DownloadPdfComponent,
    DownloadExelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LeadsModule { }
