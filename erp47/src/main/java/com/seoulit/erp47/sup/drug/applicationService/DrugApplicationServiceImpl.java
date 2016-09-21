package com.seoulit.erp47.sup.drug.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.sup.drug.dao.MedInvenDAO;
import com.seoulit.erp47.sup.drug.dao.MedPrescDAO;
import com.seoulit.erp47.sup.drug.dao.MedReturnDAO;
import com.seoulit.erp47.sup.drug.dao.WorkingJournalDAO;
import com.seoulit.erp47.sup.drug.to.MedInvenBean;
import com.seoulit.erp47.sup.drug.to.MedPrescBean;
import com.seoulit.erp47.sup.drug.to.MedicationBean;
import com.seoulit.erp47.sup.drug.to.MedicationPrescBean;
import com.seoulit.erp47.sup.drug.to.PrescErrorBean;
import com.seoulit.erp47.sup.drug.to.WorkingJournalBean;

/**
 * @Package  		com.seoulit.erp47.sup.drug.applicationService
 * @Class    		DrugApplicationServiceImpl.java
 * @Create   		2016. 09. 21.
 * @Author   		YonG
 * @Description  	약국 어플리케이션 서비스
 *
 * @LastUpdated   
 */

@Service
public class DrugApplicationServiceImpl implements DrugApplicationService{
    @Autowired
    private MedInvenDAO medInvenDAO;
    @Autowired
    private MedReturnDAO medReturnDAO;
    @Autowired
    private MedPrescDAO medPrescDAO;
    @Autowired
    private WorkingJournalDAO workingJournalDAO;

    
    @Override                 /* 약국 약품재고관리 - 조회 */
    public List<MedInvenBean> findMedInven(Map<String, String> argsMap) {
        List<MedInvenBean> medList = medInvenDAO.selectMedInven(argsMap);
        return medList;
    }

    @Override                 /* 약국 약 반납 관리 - 조회 */
    public List<MedicationBean> findMedicationList(Map<String, String> argsMap) {
        List<MedicationBean> MedicationList = medReturnDAO.selectMedicationList(argsMap);
        return MedicationList;
    }

    @Override                 /* 약국 약 반납 관리 - 반납 */
    public void processMedReturn(List<MedicationBean> medicationList) {
        for(MedicationBean medicationBean:medicationList){
            medReturnDAO.callMedReturn(medicationBean);
        }
    }

    @Override                 /* 약국 외래약, 병동약 처방관리 - 조회 */
    public List<MedPrescBean> findMedPresc(Map<String, String> argsMap) {
        List<MedPrescBean> medPrescList;
        String flag = argsMap.get("flag");
        
        if (flag.equals("1")) {
            medPrescList = medPrescDAO.selectOutpaPatInfo(argsMap);
        } else {
            medPrescList = medPrescDAO.selectWardPatInfo(argsMap);
        }
        return medPrescList;
    }

    @Override                 /* 약국 외래약, 병동약 처방관리 - 조제 */
    public void processMedication(List<MedPrescBean> medPrescList) {
        for (MedPrescBean medPrescBean : medPrescList){
            if (medPrescBean.getCheck().equals("1")) {
                medPrescDAO.callProcessMedication(medPrescBean);
            }
        }
    }

    @Override                 /* 약국 근무일지 관리 - 조회 */
    public WorkingJournalBean findWorkingJournal(Map<String, String> argsMap) {
        WorkingJournalBean workingJournalBean = workingJournalDAO.selectWorkingJournal(argsMap);
        
        List<PrescErrorBean> prescErrorList = workingJournalDAO.selectPrescErrorList(argsMap);
            if (workingJournalBean == null) {
                workingJournalBean = new WorkingJournalBean();
            }
        
            workingJournalBean.setPrescErrorList(prescErrorList);
        
        return workingJournalBean;
    }

    @Override                 /* 약국 근무일지 관리 - 일괄처리 */
    public void batchWorkingJournalProcess(Map<String, Object> map) {
        
        List<WorkingJournalBean> workingJournalList = (List<WorkingJournalBean>) map.get("workingJournalBean");
        List<PrescErrorBean> prescErrorList = (List<PrescErrorBean>) map.get("prescErrorList");
        
        if(workingJournalList!=null){
            for(WorkingJournalBean workingJournalBean: workingJournalList){
                workingJournalDAO.mergeIntoWorkingJournal(workingJournalBean);
            }
        }
        
        if( prescErrorList != null ){
            for(PrescErrorBean prescErrorBean: prescErrorList){
                switch (prescErrorBean.getStatus()){
                case "inserted" :
                    workingJournalDAO.insertPrescError(prescErrorBean);
                    break;
                case "updated" :
                    workingJournalDAO.updatePrescError(prescErrorBean);
                    break;
                case "deleted" :
                    workingJournalDAO.deletePrescError(prescErrorBean);
                    break;
                }
            }
        }
    }

    @Override                 /* 약국 근무일지 관리 - 조제목록 조회 */
    public List<MedicationPrescBean> findMedPrescList(Map<String, String> argsMap) {
        List<MedicationPrescBean> medicationPrescList = workingJournalDAO.selectMedPrescList(argsMap);
        return medicationPrescList;
    }
}