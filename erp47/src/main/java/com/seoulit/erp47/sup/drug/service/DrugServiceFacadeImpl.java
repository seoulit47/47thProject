package com.seoulit.erp47.sup.drug.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.sup.drug.applicationService.DrugApplicationService;
import com.seoulit.erp47.sup.drug.to.MedInvenBean;
import com.seoulit.erp47.sup.drug.to.MedPrescBean;
import com.seoulit.erp47.sup.drug.to.MedicationBean;
import com.seoulit.erp47.sup.drug.to.MedicationPrescBean;
import com.seoulit.erp47.sup.drug.to.WorkingJournalBean;

/**
 * @Package  		com.seoulit.erp47.sup.drug.service
 * @Class    		DrugServiceFacadeImpl.java
 * @Create   		2016. 09. 21.
 * @Author   		YonG
 * @Description   	약국 서비스퍼사드
 *
 * @LastUpdated   	
 */

@Service
public class DrugServiceFacadeImpl implements DrugServiceFacade {
    @Autowired
    private DrugApplicationService drugApplicationService;

    @Override                 /* 약국 약품재고관리 - 조회 */
    public List<MedInvenBean> findMedInven(Map<String, String> argsMap) {
        List<MedInvenBean> medInvenList = drugApplicationService.findMedInven(argsMap);
        return medInvenList;
    }

    @Override                 /* 약국 약 반납, 근무일지 관리 - 조회 */
    public List<MedicationBean> findMedicationList(Map<String, String> argsMap) {
        List<MedicationBean> medicationList = drugApplicationService.findMedicationList(argsMap);
        return medicationList;
    }

    @Override                 /* 약국 약 반납관리 - 반납 */
    public void processMedReturn(List<MedicationBean> medicationList) {
    	drugApplicationService.processMedReturn(medicationList);
    }

    @Override                 /* 약국 외래약, 병동약 처방관리 - 조회 */
    public List<MedPrescBean> findMedPresc(Map<String, String> argsMap) {
        List<MedPrescBean> medPrescList = drugApplicationService.findMedPresc(argsMap);
        return medPrescList;
    }

    @Override                 /* 약국 외래약, 병동약 처방관리 - 조제 */
    public void processMedication(List<MedPrescBean> medPrescList) {
    	drugApplicationService.processMedication(medPrescList);
    }

    @Override                 /* 약국 근무일지 관리 - 조회 */
    public WorkingJournalBean findWorkingJournal(Map<String, String> argsMap) {
        WorkingJournalBean workingJournalBean = drugApplicationService.findWorkingJournal(argsMap);
        return workingJournalBean;
    }

    @Override                 /* 약국 근무일지 관리 - 일괄처리 */
    public void batchWorkingJournalProcess(Map<String, Object> map) {
    	drugApplicationService.batchWorkingJournalProcess(map);
    }

    @Override                 /* 약국 근무일지 관리 - 조제목록 조회 */
    public List<MedicationPrescBean> findMedPrescList(Map<String, String> argsMap) {
        List<MedicationPrescBean> medicationPrescList = drugApplicationService.findMedPrescList(argsMap);
        return medicationPrescList;
    }

}
