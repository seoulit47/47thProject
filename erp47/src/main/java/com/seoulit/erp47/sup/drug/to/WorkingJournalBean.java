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
 * @Class   	WorkingJournalBean.java
 * @Create   	2016. 08. 29
 * @Author   	YonG
 * @Description	근무일지 Bean
 *
 * @LastUpdated   
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsWorkingJournal")
public class WorkingJournalBean extends BaseBean {
    private String
                    workDate,                       // 근무일자
                    dayWardHosoutPrescCount,        // 주간병동원외처방건수
                    dayWardPrescCount,              // 주간병동처방조제건수
                    nightOutpaPrescCount,           // 야간외래처방조제건수
                    nightOutpaHosoutPrescCount,     // 야간외래원외처방건수
                    nightWardHosoutPrescCount,      // 야간병동원외처방건수
                    dayOutpaPrescCount,             // 주간외래처방조제건수
                    dayPharmacist2,                 // 주간근무약사2
                    nightWardPrescCount,            // 야간병동처방조제건수
                    nightPharmacist2,               // 야간근무약사2
                    nightPharmacist3,               // 야간근무약사3
                    dayPharmacist1,                 // 주간근무약사1
                    dayPharmacist3,                 // 주간근무약사3
                    dayOutpaHosoutPrescCount,       // 주간외래원외처방건수
                    takingOver,                     // 인계사항
                    nightPharmacist1;               // 야간근무약사1
    
    private List<PrescErrorBean> PrescErrorList;
    
    @Remove
    public List<PrescErrorBean> getPrescErrorList() {
        return PrescErrorList;
    }
    
    @Remove
    public void setPrescErrorList(List<PrescErrorBean> prescErrorList) {
        PrescErrorList = prescErrorList;
    }
    
    
}
