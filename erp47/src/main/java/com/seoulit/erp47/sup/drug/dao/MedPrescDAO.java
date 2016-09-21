package com.seoulit.erp47.sup.drug.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.sup.drug.to.MedPrescBean;

public interface MedPrescDAO {
    /* 약국 외래약 처방관리- 조회  */
    List<MedPrescBean> selectOutpaPatInfo(Map<String, String> argsMap);
    
    /* 약국 병동약 처방관리- 조회 */
    List<MedPrescBean> selectWardPatInfo(Map<String, String> argsMap);

    /* 약국 외래약 처방관리 - 조제 */
    void callProcessMedication(MedPrescBean outpaPatInfoBean);


}
