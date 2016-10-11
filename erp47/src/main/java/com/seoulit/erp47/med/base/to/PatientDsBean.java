package com.seoulit.erp47.med.base.to;

import java.util.List;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.annotation.Remove;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


/**
 * @Package  com.seoulit.erp47.med.base.to
 * @Class    PatientDsBean.java
 * @Create   2016. 10. 4.
 * @Author   
 * @Description 환자상병 TO
 *
 * @LastUpdated 
 */
@Getter
@Setter
@ToString
@Dataset(name="dsPatientDs")
public class PatientDsBean extends BaseBean {

    private String patNo,                   // 환자번호
                   gubun,                   // 환자구분
                   code,                    // 상병코드
                   codeNm,                  // 상병명
                   surYn,                   // 수술여부
                   dept,                    // 진료과
                   prescNo,                 // 처방번호
                   prescDate;               // 처방날짜

    List<PatientPrscBean> patientPrscList;  // 처방리스트
    
    @Remove
    public List<PatientPrscBean> getPatientPrscList() {
        return patientPrscList;
    }

    @Remove
    public void setPatientPrscList(List<PatientPrscBean> patientPrscList) {
        this.patientPrscList = patientPrscList;
    }
    
    
}
