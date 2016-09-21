package com.seoulit.erp47.sup.drug.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.sup.drug.to.MedicationPrescBean;
import com.seoulit.erp47.sup.drug.to.PrescErrorBean;
import com.seoulit.erp47.sup.drug.to.WorkingJournalBean;

public interface WorkingJournalDAO {
    /* 약국 근무일지 관리 - 조회 */
    WorkingJournalBean selectWorkingJournal(Map<String, String> argsMap);
    List<PrescErrorBean> selectPrescErrorList(Map<String, String> argsMap);
    
    /* 약국 근무일지 관리 - 일괄처리 */
    void mergeIntoWorkingJournal(WorkingJournalBean workingJournalBean);
    void insertPrescError(PrescErrorBean prescErrorBean);
    void updatePrescError(PrescErrorBean prescErrorBean);
    void deletePrescError(PrescErrorBean prescErrorBean);
    
    /* 약국 근무일지 관리 - 조제목록 조회 */
    List<MedicationPrescBean> selectMedPrescList(Map<String, String> argsMap);

}
