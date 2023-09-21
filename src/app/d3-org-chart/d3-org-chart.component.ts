import {
  OnChanges,
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef
} from '@angular/core';

import { OrgChart } from 'd3-org-chart';

@Component({
  selector: 'app-d3-org-chart',
  templateUrl: './d3-org-chart.component.html',
  styleUrls: ['./d3-org-chart.component.css']
})
export class D3OrgChartComponent implements OnInit, OnChanges {
  @ViewChild('chartContainer') chartContainer!: ElementRef;
  @Input() data?: any[];
  chart!: any;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    if (!this.chart) {
      this.chart = new OrgChart();
    }
    this.updateChart();
  }

  ngOnChanges() {
    this.updateChart();
  }

  updateChart() {
    if (!this.data) {
      return;
    }
    if (!this.chart) {
      return;
    }
    this.chart
      .container(this.chartContainer.nativeElement)
      .data(this.data)
      .nodeWidth((d: any) => 250)
      .initialZoom(0.7)
      .nodeHeight((d: any) => 175)
      .childrenMargin((d: any) => 40)
      .compactMarginBetween((d: any) => 15)
      .compactMarginPair((d: any) => 80)
      .nodeContent(function (d: any, i: any, arr: any, state: any) {
        return `
        <div class="test" style="padding-top:30px;background-color:none;margin-left:1px;height:${d.height
          }px;border-radius:2px;overflow:visible">
          <div style="height:${d.height - 32
          }px;padding-top:0px;background-color:white;border:1px solid lightgray;">

            <img src=" ${d.data.imageUrl
          }" style="margin-top:-30px;margin-left:${d.width / 2 - 30}px;border-radius:100px;width:60px;height:60px;" />

           <div style="margin-right:10px;margin-top:15px;float:right">${d.data.id
          }</div>
           
           <div style="margin-top:-30px;background-color:#3AB6E3;height:10px;width:${d.width - 2
          }px;border-radius:1px"></div>

           <div style="padding:20px; padding-top:35px;text-align:center">
               <div style="color:#111672;font-size:16px;font-weight:bold"> ${d.data.name
          } </div>
               <div style="color:#404040;font-size:16px;margin-top:4px"> ${d.data.positionName
          } </div>
           </div> 
           <div style="display:flex;justify-content:space-between;padding-left:15px;padding-right:15px;">
             <div > Manages:  ${d.data._directSubordinates} 👤</div>  
             <div > Oversees: ${d.data._totalSubordinates} 👤</div>    
           </div>
          </div>     
  </div>
`
      })
      .render();

    // Encuentra los elementos generados y les añade el evento
    const nodes = this.chartContainer.nativeElement.querySelectorAll('.test');
    nodes.forEach((node: HTMLElement) => {
      node.addEventListener('click', () => {
        const event = new CustomEvent('nodeClick', { bubbles: true });
        node.dispatchEvent(event);
      });
    });
  }

  updateChart2() {
    if (!this.data) {
      return;
    }
    if (!this.chart) {
      return;
    }
    this.chart
      .container(this.chartContainer.nativeElement)
      .data(this.data)
      .nodeWidth((d: any) => 250)
      .initialZoom(0.7)
      .nodeHeight((d: any) => 175)
      .childrenMargin((d: any) => 40)
      .compactMarginBetween((d: any) => 15)
      .compactMarginPair((d: any) => 80)
      .nodeContent(function (d: any, i: any, arr: any, state: any) {
        return `
        <div style="padding-top:30px;background-color:none;margin-left:1px;height:${d.height
          }px;border-radius:2px;overflow:visible">
          <div style="height:${d.height - 32
          }px;padding-top:0px;background-color:white;border:1px solid lightgray;">

            <img src=" ${d.data.imageUrl
          }" style="margin-top:-30px;margin-left:${d.width / 2 - 30}px;border-radius:100px;width:60px;height:60px;" />

           <div style="margin-right:10px;margin-top:15px;float:right">${d.data.id
          }</div>
           
           <div style="margin-top:-30px;background-color:#3AB6E3;height:10px;width:${d.width - 2
          }px;border-radius:1px"></div>

           <div style="padding:20px; padding-top:35px;text-align:center">
               <div style="color:#111672;font-size:16px;font-weight:bold"> ${d.data.name
          } </div>
               <div style="color:#404040;font-size:16px;margin-top:4px"> ${d.data.positionName
          } </div>
           </div> 
           <div style="display:flex;justify-content:space-between;padding-left:15px;padding-right:15px;">
             <div > Manages:  ${d.data._directSubordinates} 👤</div>  
             <div > Oversees: ${d.data._totalSubordinates} 👤</div>    
           </div>
          </div>     
  </div>
`
      })
      .render();


    // Crear un boton , darle cualquier clase
    setTimeout(() => {
      const buttons = this.chartContainer.nativeElement.querySelectorAll('button');
      buttons.forEach((button: any) => {
        button.addEventListener('click', () => {
          console.log(button.className);
        });
      });
    });
  }

  decirHola(event: Event) {
    console.log(event);
  }
}
