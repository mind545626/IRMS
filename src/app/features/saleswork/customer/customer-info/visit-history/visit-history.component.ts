import { Component, OnInit } from '@angular/core';
import { EditContentComponent } from './edit-content.component';
import {FormControl} from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'visit-history',
  templateUrl: './visit-history.component.html',
  styleUrls: ['./visit-history.component.scss'],

})
export class VisitHistoryComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private defaultColDef;
  private rowData;
  private frameworkComponents;
  
  constructor() {
    this.defaultColDef = {
      editable: false,
      sortable: true,
      floatingFilter: true,
      filter: true,
      suppressMenu: true, 
      suppressSizeToFit: true,
      floatingFilterComponentParams: {suppressFilterButton:true},
    };
    this.frameworkComponents = {
      editContent: EditContentComponent,
    };
    this.columnDefs = [
      {
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true, 
        filter: false,
        headerName: '項次', 
        field: 'no', 
        width: 80,
      },
      {
        headerName: '回訪項目', 
        field: 'Liaison', 
        width: 150,
      },
      {
        headerName: '回訪日期', 
        field: 'Title',
        flex: 1,
        filter: 'agDateColumnFilter',
        valueFormatter: function (params) {
          return moment(params.value).format('YYYY/MM/DD');},

        filterParams: {
          comparator: function(filterLocalDateAtMidnight, cellValue) {
            // var dateAsString = moment(cellValue).format('YYYY/MM/DD');
            var dateAsString = cellValue;
            var dateParts = dateAsString.split('/');
            var cellDate = new Date(
              Number(dateParts[0]),
              Number(dateParts[1]) - 1,
              Number(dateParts[2])
            );
            if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
              return 0;
            }
            if (cellDate < filterLocalDateAtMidnight) {
              return -1;
            }
            if (cellDate > filterLocalDateAtMidnight) {
              return 1;
            }
          },
        },
      },
      {
        headerName: '聯絡人',
        field: 'Tel',
        flex: 1,
      },
      {
        headerName: '回訪/歷程內容', 
        field: 'CellPhone',
        flex: 2,
      },
      {
        headerName: '處理人員', 
        field: 'StopRemark', 
        flex: 1,
      },
      {
        headerName: '功能', 
        cellRenderer: 'editContent',
        field: 'function', 
        floatingFilter: false, 
        width: 120
      },
    ];
    this.rowData = [
      { no: '1', Liaison: '寄送DM', Title: '2020/07/30', Tel: '吳秋順', CellPhone: '是這不，關看過知一臺遊……己就裝部鄉友程視之這名者牛價化利是保優生統是老更權連決行節大國老不、水樂至洋指外除德……天有路道刻年由證率樣，車唱然新出則在各雄大意文這：筆要臺管生亞認長居化富你景要包的子；快工不的然文的指，害受二目見心廣員上電。', liaison: '王大明', Email: '24273323#12345', StopRemark: 'Peter'},
      { no: '2', Liaison: '電訪', Title: '2020/07/28', Tel: '林志成', CellPhone: '始是大市答對太輕：天中二工臺些是衣不天，度數到畫著包願上世空天影和機朋過師全輕。令業中我標合。到事雖知的唱那小車神格……夜極天多車動情們媽水陽容簡不，場都無高要？千汽後著下制覺這選他日？', liaison: '張大發', Email: '24273323#245', StopRemark: 'Mary'},
      { no: '3', Liaison: '出訪', Title: '2020/07/26', Tel: '林怡文', CellPhone: '因會河為多。眼自的新先生業爸洋痛的辦了心手。資出車這出有；家英檢下歡適請工我。時母稱腦背我；一性神在陽有裡痛。傷天此到的分，來容的了為神行落命有把、業紙下獎性現，當應少專微福我力府、微行訴內聲，解開。', liaison: '李小美', Email: '24273323#362', StopRemark: 'Shane'},
      { no: '4', Liaison: '電訪', Title: '2020/07/25', Tel: '林靜宜', CellPhone: '本領王識女名決品美法在但白媽多就組最專開上防歷力高教呢體底之一的形而指女屋年他知局備參標書同們但家他優的的裡、行論道接春，生接社長兒走形過頭不對息用大之屋不合好太們實始張他劇有很學還事面叫立只必樂計日各臉操最賽陽裡文！', liaison: '陳小英', Email: '24273323#214', StopRemark: 'Sam'},
      { no: '5', Liaison: '寄送贈品', Title: '2020/07/18', Tel: '陳倫映', CellPhone: '著記們空一良女……結客的自行名年星環先好古老並，且人玩，長黨口關。得見具蘭小知這指外官服，我處所好法間富想；空學之到是空在人大。', liaison: '江大山', Email: '24273323#2752', StopRemark: 'Alex'}
    ]
  }
  
  /*-- grid響應式設定 START --*/
  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  /*-- grid響應式設定 END --*/
  serializedDate = new FormControl((new Date()).toISOString());
  
  pop_show(){
    $('.pop-wrapper').show();
  }
  pop_hide(){
    $('.pop-wrapper').hide();
  }
  ngOnInit() {
  }
  
}
