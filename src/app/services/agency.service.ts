import { Injectable } from '@angular/core';
import {HttpClient , HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';


/**
 * 请求待办的service
 */
@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  private agencyData: any;
  private url = 'http://localhost:4200/MobileOAServer/ContractManage!getToDoList?organId=5&login=zhangyu';
  /**
   * 配置看proxy.config.json
   * @type {string}
   */
  private url2 = 'http://113.108.118.141:8082/MobileOAServer/ContractManage!getToDoList?organId=5&login=zhangyu';
  
  constructor(private http: HttpClient) {
  }

  // function  请求待办列表， 返回类型为 {}
  getAngencyData(): Observable<AgencyData> {
    return this.http.get<AgencyData>(this.url);
  }
}
/**
 * Module
 * {
            "typeName": "合同付款通知单",
            "receivetime": "2018-10-16",
            "title": "[经办人确认]手机接口测试20181016",
            "isEnterIdea": "0",
            "type": "5",
            "cancelFlag": 0,
            "url": "http://118.190.144.2:8090/contractBillheadAI/contractBillheadAI!waitDo.action?organId=5&login=zhangyu&waitDoId=301295"
        }
 * @param String
 */
export class AgencyModule {

  constructor( public typeName: String, public receivetime: String,
                public title: String, public isEnterIdea: String,
                public type: String, public cancelFlag: String, public url: String ) {}
}
export  class  AgencyData {
  constructor(public num: String , public waitDoList: AgencyModule[]) {}
}
