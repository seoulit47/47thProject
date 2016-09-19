package com.seoulit.erp47.hrs.guntae.to;


import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoul.erp47.hrs.guntae.to
 * @Class    OverTimeWorkBean.java
 * @Create   2016. 9. 06.
 * @Author   pyh
 * @Description
 *
 * @LastUpdated
 *     
 */
@Dataset(name="dsOverTimeWork")
@Getter
@Setter
@ToString
public class OverTimeWorkBean extends BaseBean{

	private String
             startOvertime             //시간외근무 시작시간
           , endOvertime               //시간외근무 종료시간
           , totalOvertime             //총 근무시간
           , overStatus                //결재상태
           , reason                    //요청사유
           , approvalReason            //사후승인요청사유
           , overtimeNo                //시간외근무번호
           , empNo                     //사원번호
           , empNm                     //사원명
           , deptCd                    //부서코드
           , deptNm                    //부사명
           , startOvertimeDate         //시간외근무 시작일
           , endOvertimeDate           //시간외근무 종료일
           , beforeOvertimeNo;         //변경신청할 시간외근무번호

}
