package com.seoulit.erp47.sup.drug.to;

import java.util.List;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.annotation.Remove;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  	com.seoulit.erp47.sup.drug.to
 * @Class    	MedPrescBean.java
 * @Create   	2016. 08. 29
 * @Author   	YonG
 * @Description	약 처방 Bean
 *
 * @LastUpdated 
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsMedPresc")
public class MedPrescBean extends BaseBean {
    private String 
                    patNo,          // 환자번호
                    prescDate,      // 처방일자
                    diseaseNm,      // 질병명
                    diseaseCd,      // 질병코드
                    dept,           // 부서
                    doctNm,         // 의사명
                    patNm,          // 환자명
                    addr,           // 주소
                    tel,            // 전화번호
                    check,          // 체크구분
                    flag,           // 병동/외래구분
                    ward,           // 병동
                    hroom,          // 병실
                    hosptlzDate;    // 입원날짜
    
    private List<PrescInfoBean> prescInfoList;

    @Remove
    public List<PrescInfoBean> getPrescInfoList() {
        return prescInfoList;
    }
    @Remove
    public void setPrescInfoList(List<PrescInfoBean> prescInfoList) {
        this.prescInfoList = prescInfoList;
    }
}
