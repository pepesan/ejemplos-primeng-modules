import {Component, OnInit} from '@angular/core';

interface CompanyProfile {
  name: String;
  sector: String;
  thisYearSales: String;
  lastYearSales: String;
  thisYearGrowth: String;
  lastYearGrowth: String;
}

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent implements OnInit {
  companyProfiles: CompanyProfile[] = [];
  columns: any[] = [
    {
      name: "Sector",
      field: "sector",
    },
    {
      name: "Company",
      field: "name",
    },
    {
      name: "This Year Sales",
      field: "thisYearSales",
    },
    {
      name: "Last Year Sales",
      field: "lastYearSales",
    },
  ];

  ngOnInit() {
    this.companyProfiles = [
      {
        name: "Apple",
        sector: "Technology",
        thisYearSales: "$ 2,000,000,000",
        lastYearSales: "$ 1,700,000,000",
        thisYearGrowth: "21%",
        lastYearGrowth: "15%",
      },
      {
        name: "Mac Donalds",
        sector: "Food",
        thisYearSales: "$ 1,100,000,000",
        lastYearSales: "$ 800,000,000",
        thisYearGrowth: "18%",
        lastYearGrowth: "15%",
      },
      {
        name: "Google",
        sector: "Technology",
        thisYearSales: "$ 1,800,000,000",
        lastYearSales: "$ 1,500,000,000",
        thisYearGrowth: "15%",
        lastYearGrowth: "13%",
      },
      {
        name: "Domino's",
        sector: "Food",
        thisYearSales: "$ 1,000,000,000",
        lastYearSales: "$ 800,000,000",
        thisYearGrowth: "13%",
        lastYearGrowth: "14%",
      },
      {
        name: "Meta",
        sector: "Technology",
        thisYearSales: "$ 1,100,000,000",
        lastYearSales: "$ 1,200,000,000",
        thisYearGrowth: "11%",
        lastYearGrowth: "12%",
      },
      {
        name: "Snapchat",
        sector: "Technology",
        thisYearSales: "$ 1,500,000,000",
        lastYearSales: "$ 1,200,000,000",
        thisYearGrowth: "16%",
        lastYearGrowth: "14%",
      },
      {
        name: "Tesla",
        sector: "AutoMobile",
        thisYearSales: "$ 1,300,000,000",
        lastYearSales: "$ 900,000,000",
        thisYearGrowth: "23%",
        lastYearGrowth: "16%",
      },
      {
        name: "Ford",
        sector: "AutoMobile",
        thisYearSales: "$ 700,000,000",
        lastYearSales: "$ 750,000,000",
        thisYearGrowth: "14%",
        lastYearGrowth: "15%",
      },
      {
        name: "Twitter",
        sector: "Technology",
        thisYearSales: "$ 1,200,000,000",
        lastYearSales: "$ 1,200,000,000",
        thisYearGrowth: "19%",
        lastYearGrowth: "18%",
      },
      {
        name: "Reliance Jio",
        sector: "Telecom",
        thisYearSales: "$ 800,000,000",
        lastYearSales: "$ 800,000,000",
        thisYearGrowth: "13%",
        lastYearGrowth: "13%",
      },
      {
        name: "H&M",
        sector: "Clothing",
        thisYearSales: "$ 1,600,000,000",
        lastYearSales: "$ 1,400,000,000",
        thisYearGrowth: "17%",
        lastYearGrowth: "16%",
      },
      {
        name: "Nike",
        sector: "Sports",
        thisYearSales: "$ 2,200,000,000",
        lastYearSales: "$ 2,400,000,000",
        thisYearGrowth: "18%",
        lastYearGrowth: "22%",
      },
      {
        name: "Adidas",
        sector: "Sports",
        thisYearSales: "$ 2,300,000,000",
        lastYearSales: "$ 2,100,000,000",
        thisYearGrowth: "24%",
        lastYearGrowth: "21%",
      },
      {
        name: "Red Chief",
        sector: "Clothing",
        thisYearSales: "$ 800,000,000",
        lastYearSales: "$ 600,000,000",
        thisYearGrowth: "19%",
        lastYearGrowth: "15%",
      },
    ];
  }
}
