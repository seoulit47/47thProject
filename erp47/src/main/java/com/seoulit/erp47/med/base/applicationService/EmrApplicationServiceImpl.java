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
import com.seoulit.erp47.med.base.to.PrscBean;
import com.seoulit.erp47.med.base.to.PrscDtlBean;

@Component
public class EmrApplicationServiceImpl implements EmrApplicationService {

	/*@Autowired
    private ReceiptInfoDAO receiptInfoDAO;
   
   
   
   */
    @Autowired
    private PrscDAO prscDAO;
    @Autowired
    private DiseaseDAO diseaseDAO;
    @Autowired
    private PatientDsDAO patientDsDAO;
    /*@Autowired
    private PatientPrscDAO patientPrscDAO;*/
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
		
	}


}
