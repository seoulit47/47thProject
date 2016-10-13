package com.seoulit.erp47.med.base.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.med.base.dao.BaseExamDAO;
import com.seoulit.erp47.med.base.dao.DiseaseDAO;
import com.seoulit.erp47.med.base.dao.PatientDsDAO;
import com.seoulit.erp47.med.base.dao.PatientPrscDAO;
import com.seoulit.erp47.med.base.dao.PrscDAO;
import com.seoulit.erp47.med.base.to.BaseExamBean;
import com.seoulit.erp47.med.base.to.DiseaseBean;
import com.seoulit.erp47.med.base.to.PatientDsBean;
import com.seoulit.erp47.med.base.to.PatientPrscBean;
import com.seoulit.erp47.med.base.to.PrscBean;
import com.seoulit.erp47.med.base.to.PrscDtlBean;
import com.seoulit.erp47.won.outPatMgt.dao.ReceiptInfoDAO;
import com.seoulit.erp47.won.outPatMgt.to.ReceiptInfoBean;

@Component
public class EmrApplicationServiceImpl implements EmrApplicationService {

	@Autowired
    private ReceiptInfoDAO receiptInfoDAO;
    @Autowired
    private PrscDAO prscDAO;
    @Autowired
    private DiseaseDAO diseaseDAO;
    @Autowired
    private PatientDsDAO patientDsDAO;
    @Autowired
    private PatientPrscDAO patientPrscDAO;
    @Autowired
    private BaseExamDAO baseExamDAO;
    
    
    @Override
    public List<PrscBean> findPrscList(Map<String, String> argsMap) {
        return prscDAO.selectPrscList(argsMap);
    }

    @Override
    public List<PrscDtlBean> findPrscDtlList(Map<String, String> argsMap) {
        return prscDAO.selectPrscDtlList(argsMap);
    }

	@Override
	public List<DiseaseBean> findDiseaseList(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return diseaseDAO.findDiseaseList(argsMap);
	}

	@Override
	public List<DiseaseBean> findDiseaseCdList() {
		// TODO Auto-generated method stub
		return diseaseDAO.findDiseaseCdList();
	}

	@Override
	public List<PatientDsBean> findPatientDsPrscList(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return patientDsDAO.findPatientDsPrscList(argsMap);
	}

	@Override
	public List<BaseExamBean> findBaseExamList(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return baseExamDAO.findBaseExamList(argsMap);
	}

	@Override
	public void batchEmrProcess(Map<String, Object> emrMap) {
		
		
		//환자 기초검사 정보 등록,수정
		List<BaseExamBean>baseExamList = (List<BaseExamBean>)emrMap.get("baseExamList");
		
		for(BaseExamBean baseExamBean : baseExamList){
			
			switch(baseExamBean.getStatus()){
			
					case "inserted" : 
							
						baseExamDAO.insertBaseExamList(baseExamBean);
						break;
					
					case "updated" :
						
						baseExamDAO.updateBaseExamList(baseExamBean);
						break;
			
			}
			
		}
		
		//환자상병 등록,수정
		List<PatientDsBean>patientList = (List<PatientDsBean>)emrMap.get("patientDsList");
		
		for(PatientDsBean patientDsBean : patientList){
			
				switch(patientDsBean.getStatus()){
				
					case"inserted" :
						patientDsDAO.insertPatientDsList(patientDsBean);
						break;
						
					case"updated" :
						System.out.println("update왜 안되지 ??");
						patientDsDAO.updatePatientDsList(patientDsBean);
						break;
				
				}
			
			
		}
		
		// 환자 접수정보
        List<ReceiptInfoBean> receiptInfoList = (List<ReceiptInfoBean>) emrMap.get("receiptList"); 
        if (receiptInfoList.size() != 0) { 
            for (ReceiptInfoBean receiptBean : receiptInfoList) { 
                switch (receiptBean.getStatus()) { 
                    case "updated" : receiptInfoDAO.updateReceipt(receiptBean); break;      // 진료여부 수술여부 업데이트
                }
            }
        }
        
     
        
     // 환자 처방정보
        List<PatientPrscBean> patientPrscList = (List<PatientPrscBean>) emrMap.get("patientPrscList");
        
        for (PatientDsBean patientDsBean : patientList) {
        	
            switch (patientDsBean.getStatus()) {
            case "inserted":
                patientDsDAO.insertPatientDsList(patientDsBean);
                break;
            case "updated":
                patientDsDAO.updatePatientDsList(patientDsBean);
                break;
            }
   
            // 환자구분에 따라 입원환자, 외래환자 구분
            System.out.println("환자구분 : " + patientDsBean.getGubun());
            if ("Y".equalsIgnoreCase(patientDsBean.getGubun())) {
                for (PatientPrscBean patientPrscBean : patientPrscList) {
                    if (patientDsBean.getCode().equals(patientPrscBean.getDiseaseCd())) {
                        switch (patientPrscBean.getStatus()) {
                        case "inserted":
                            patientDsDAO.insertInpatientPrsc(patientPrscBean);
                            break;
                        case "updated":
                            patientDsDAO.updateInpatientPrsc(patientPrscBean);
                            break;
                        }
                    }
                }
            } else {
                for (PatientPrscBean patientPrscBean : patientPrscList) {
                	System.out.println(patientPrscBean.getStatus()+"!!!!!!!!!!");
                    if (patientDsBean.getCode().equals(patientPrscBean.getDiseaseCd())) {
                        switch (patientPrscBean.getStatus()) {
                        case "inserted":
                            patientDsDAO.insertOutpatientPrsc(patientPrscBean);
                            break;
                        case "updated":
                            patientDsDAO.updateOutpatientPrsc(patientPrscBean);
                            break;
                        }
                    }
                }
            }
        }
		
	}
	//------------------------------------------------------------------------------------
	//------------------------------------------------------------------------------------
	//------------------------------------------------------------------------------------
	@Override
	public List<PatientDsBean> findPatientDsList(Map<String, String> argsMap) {
		return patientDsDAO.selectPatientDsList(argsMap);
	}

	@Override
	public void batchDiseaseProcess(List<DiseaseBean> diseaseList) {
		  for (DiseaseBean diseaseBean : diseaseList) {
	            switch (diseaseBean.getStatus()) {
	            case "inserted":
	                diseaseDAO.insertDisease(diseaseBean);
	                break;
	            case "updated":
	                diseaseDAO.updateDisease(diseaseBean);
	                break;
	            case "deleted":
	                diseaseDAO.deleteDisease(diseaseBean);
	                break;
	            }
	        }
	}

	@Override
	public List<PatientPrscBean> findPatientPrscList(Map<String, String> argsMap) {
		return patientPrscDAO.selectPatientPrscList(argsMap);
	}

	@Override
	public List<PatientPrscBean> findDrugPrscList(Map<String, String> argsMap) {
		return patientPrscDAO.selectDrugPrscList(argsMap);
	}
}
