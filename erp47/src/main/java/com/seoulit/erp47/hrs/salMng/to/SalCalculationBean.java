package com.seoulit.erp47.hrs.salMng.to;

import java.util.List;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.annotation.Remove;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoulit.erp47.hrs.salMng.to
 * @Class    SalCalculationBean.java
 * @Create   2016. 9. 27.
 * @Author   박 영 희
 * @Description
 *
 * @LastUpdated 
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsSalCalcul")
public class SalCalculationBean extends BaseBean{
	private String empNo,            // 사원번호
				   empNm,            // 사원명
				   deptNm,           // 부서명
				   jobClass,         // 직종
				   hireDate,         // 입사일자
				   retDate,          // 퇴직일자
				   taxationTaxSum,   // 과세총액
				   freeTaxAmt,       // 비과세총액
				   compShare,        // 회사총부담금
				   aap,              // 차인지급액
				   dline,            // 마감상태
				   calYn,            // 계산여부
				   belongYm,         // 귀속연월
				   paymentDate,      // 지급일자
				   select = "0",     // checkbox 미선택
				   year,             // 년도
				   ERRCD,            // 에러코드
				   ERRMSG;           // 에러메시지

    private List<SalCalculDetailBean> salCalculDetailList;

    @Remove
    public List<SalCalculDetailBean> getSalCalculDetailList() {
        return salCalculDetailList;
    }

    @Remove
    public void setSalCalculDetailList(List<SalCalculDetailBean> salCalculDetailList) {
        this.salCalculDetailList = salCalculDetailList;
    }

}
