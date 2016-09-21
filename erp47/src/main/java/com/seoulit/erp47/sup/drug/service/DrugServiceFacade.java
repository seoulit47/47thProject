package com.seoulit.erp47.sup.drug.service;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.sup.drug.to.MedInvenBean;
import com.seoulit.erp47.sup.drug.to.MedPrescBean;
import com.seoulit.erp47.sup.drug.to.MedicationBean;
import com.seoulit.erp47.sup.drug.to.MedicationPrescBean;
import com.seoulit.erp47.sup.drug.to.WorkingJournalBean;

public interface DrugServiceFacade {
    /* 약국 약품재고관리 - 조회 */
    List<MedInvenBean> findMedInven(Map<String, String> argsMap);
    
    /* 약국 약 반납, 근무일지 관리 - 조회 */
    List<MedicationBean> findMedicationList(Map<String, String> argsMap);
    
    /* 약국 약 반납관리 - 반납 */
    void processMedReturn(List<MedicationBean> medicationList);
    
    /* 약국 외래약, 병동약 처방관리 - 조회 */
    List<MedPrescBean> findMedPresc(Map<String, String> argsMap);
    
    /* 약국 외래약, 병동약 처방관리 - 조제 */
    void processMedication(List<MedPrescBean> medPrescList);
    
    /* 약국 근무일지 관리 - 조회 */
    WorkingJournalBean findWorkingJournal(Map<String, String> argsMap);
    
    /* 약국 근무일지 관리 - 일괄처리 */
    void batchWorkingJournalProcess(Map<String, Object> map);
    
    /* 약국 근무일지 관리 - 조제목록 조회 */
    List<MedicationPrescBean> findMedPrescList(Map<String, String> argsMap);






    
}
