import { Component } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, Label } from "ng2-charts";
import { DataService } from "../data.service";

@Component({
  selector: "app-line-chart",
  templateUrl: "./line-chart.component.html",
  styleUrls: ["./line-chart.component.css"],
})
export class LineChartComponent {
  objectKeys = Object.keys;
  cryptos: any;
  time: any;

  constructor(private _data: DataService) {}

  ngOnInit() {
    this.getHistoryCurrValue();


    setTimeout(() => {

      this.lineChartData.forEach((x) => {
        let num;
        const data: number[] = x.data as number[];

        for (let i = 0; i < this.cryptos.Data.Data.length; i++) {
          num = this.cryptos.Data.Data[i].close;
          console.log(num);
        //  return data.push(num);
        }
      });

      // this.time = new Date().toLocaleString("en-US", {
      //   hour: "numeric",
      //   minute: "numeric",
      // });
      // this.lineChartLabels.push(this.time);
    }, 2000);

    // this.getAmount();

    // setTimeout(() => {
    //   this.pushOne();
    //   // this.getHistoryCurrValue();
    //   // this.pushHistory();
    // }, 1000);

    // setInterval(() => {
    //   this.getAmount();
    //   this.pushOne();
    // }, 60 * 1000);
  }

  // Chart params
  lineChartData: ChartDataSets[] = [
    { data: [], label: "Ethereum (ETH) rate to Euro (EUR)" },
  ];

  lineChartLabels: Label[] = [];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      backgroundColor: "rgba(255,0,0,0.3)",
      borderColor: "red",
      pointBackgroundColor: "rgba(148,159,177,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(148,159,177,0.8)",
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = "line";

  pushOne() {
    this.lineChartData.forEach((x) => {
      const num = this.cryptos.ETH.EUR;
      const data: number[] = x.data as number[];
      data.push(num);
    });

    this.time = new Date().toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });
    this.lineChartLabels.push(this.time);
  }

  public getAmount() {
    this._data.getPrices().subscribe((res) => {
      this.cryptos = res;
      // console.table("API cryptocurrency JSON data", this.cryptos.ETH.EUR);
    });
  }

  getHistoryCurrValue() {
    this._data.getHistory().subscribe((res) => {
      this.cryptos = res;
      // for (let i = 0; i < this.cryptos.Data.Data.length; i++) {
      //   console.log(this.cryptos.Data.Data[i].close);
      // }
    });
  }

  // pushHistory() {
  //   this.lineChartData.forEach((x) => {
  //     let num = [];
  //     for (let i = 0; i < this.cryptos.Data.Data.length; i++) {
  //       num += this.cryptos.Data.Data[i].close;
  //     }

  //     const data: any[] = x.data as any[];
  //     data.push(num);
  //   });

  //   this.time = new Date().toLocaleString("en-US", {
  //     hour: "numeric",
  //     minute: "numeric",
  //   });
  //   this.lineChartLabels.push(this.time);
  // }
}
