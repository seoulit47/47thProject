package com.seoulit.erp47.sup.drug.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.sup.drug.to.MedicationBean;

public interface MedReturnDAO {
    /* 약국 약 반납 관리 - 조회 */
    List<MedicationBean> selectMedicationList(Map<String, String> argsMap);
    
    /* 약국 약 반납 관리 - 반납 */
    void callMedReturn(MedicationBean medicationBean);

}
