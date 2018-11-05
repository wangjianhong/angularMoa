import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AgencyData, AgencyModule, AgencyService} from '../../services/agency.service';
import {LoggerService} from '../../services/logger.service';
import {Router} from '@angular/router';

/**
 * 公文待办
 */
@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit {
  /**
   * "合同付款通知单",
   "receivetime": "2018-10-16",
   "title": "[经办人确认]手机接口测试20181016",
   "isEnterIdea": "0",
   "type": "5",
   "cancelFlag": 0,
   "url": "http://118.190.144.2:8090/contractBillheadAI/contractBillheadAI!waitDo.action?organId=5&login=zhangyu&waitDoId=301295"

   * @type {AgencyModule[]}
   */
  // 待办列表 初始化死数据，因为暂时的请求返回的数据为空，当请求服务返回数据不为空时 就不需初始化了
  public agencyList: AgencyModule[] = [
    new AgencyModule('合同付款通知单', '2018-10-11', '[经办人确认]手机接口测试20181011', '0', '5', '0', 'http://118.190.144.2:8090/contractBillheadAI/contractBillheadAI!waitDo.action?organId=5&login=zhangyu&waitDoId=301295'),
    new AgencyModule('合同付款通知单', '2018-10-12', '[经办人确认]手机接口测试20181012', '0', '5', '0', 'http://118.190.144.2:8090/contractBillheadAI/contractBillheadAI!waitDo.action?organId=5&login=zhangyu&waitDoId=301295'),
    new AgencyModule('合同付款通知单', '2018-10-13', '[经办人确认]手机接口测试20181013', '0', '5', '0', 'http://118.190.144.2:8090/contractBillheadAI/contractBillheadAI!waitDo.action?organId=5&login=zhangyu&waitDoId=301295'),
    new AgencyModule('合同付款通知单', '2018-10-14', '[经办人确认]手机接口测试20181014', '0', '5', '0', 'http://118.190.144.2:8090/contractBillheadAI/contractBillheadAI!waitDo.action?organId=5&login=zhangyu&waitDoId=301295'),
    new AgencyModule('合同付款通知单', '2018-10-15', '[经办人确认]手机接口测试20181015', '0', '5', '0', 'http://118.190.144.2:8090/contractBillheadAI/contractBillheadAI!waitDo.action?organId=5&login=zhangyu&waitDoId=301295'),
    new AgencyModule('合同付款通知单', '2018-10-16', '[经办人确认]手机接口测试20181016', '0', '5', '0', 'http://118.190.144.2:8090/contractBillheadAI/contractBillheadAI!waitDo.action?organId=5&login=zhangyu&waitDoId=301295')
  ];
  public agencyData: AgencyData;
  //  1. 声明了一个私有 agencyService 属性，2. 把它标记为一个 agencyService 的注入点。
  // 当 Angular 创建 HeroesComponent 时，依赖注入系统就会把这个 heroService 参数设置为 HeroService 的单例对象。
  constructor(private agencyService: AgencyService,
               private logger: LoggerService,
               private router: Router) { }

  ngOnInit() {
    this.agencyService.getAngencyData().subscribe( response => {
      this.logger.log('success>>>>>>>>>>>>>>' + response);
      if (response != null) {
        this.agencyList = response.waitDoList;
      }
    }, error => {
      this.logger.error('failure>>>>>>>>>>>>' + error);
    });
  }
  // function  跳转到详情 并传递参数
 onItemClick( agencyItem: AgencyModule): void {
    this.logger.log('' + agencyItem.title);
    // this.router.navigate(['/agencyDetail'],  { queryParams: { 'string1': 'stringvalue1', 'string2': 'stringvalue2' }});
    this.router.navigate(['/agencyDetail', agencyItem]);
  }
}
