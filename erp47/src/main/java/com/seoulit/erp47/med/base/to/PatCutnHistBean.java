package com.seoulit.erp47.med.base.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoulit.erp47.med.base.to
 * @Class    CntnLogBean.java
 * @Create   
 * @Author   김성호
 * @Description 환자 주의사항 정보 수정내역 TO
 *
 * @LastUpdated 
 */
@Getter
@Setter
@ToString
@Dataset(name = "dsPatCutnHist")
public class PatCutnHistBean extends BaseBean {
    private String patNo,	//환자코드
    			histNo,		//내역번호
    			modifyLog,	//수정내역
    			amender,	//수정자
    			modifyDate;	//수정일자
}
