package com.seoulit.erp47.sup.drug.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  	com.seoulit.erp47.sup.drug.to
 * @Class    	PrescErrorBean.java
 * @Create   	2016. 08. 29
 * @Author   	YonG
 * @Description	처방에러 Bean
 *
 * @LastUpdated 
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsPrescError")
public class PrescErrorBean extends BaseBean {
    private String 
                    medicationNo,         // 조제번호
                    etcErrorYn,           // 기타오류
                    workDate,             // 근무일자
                    solveNote,            // 해결사항
                    errorNo,              // 오류번호
                    patErrorYn,           // 환자오류
                    weighingErrorYn,      // 계수/계량오류
                    prescErrorYn,         // 처방오류
                    patNo,                // 환자번호
                    patNm,                // 환자이름
                    ward,                 // 병동
                    prescDay;             // 처방일자
                
}