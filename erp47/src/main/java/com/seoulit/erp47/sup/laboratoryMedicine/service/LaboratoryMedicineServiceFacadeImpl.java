package com.seoulit.erp47.sup.laboratoryMedicine.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.sup.laboratoryMedicine.applicationService.LaboratoryMedicineApplicationService;
import com.seoulit.erp47.sup.laboratoryMedicine.to.ClinspeReceiptBean;
import com.seoulit.erp47.sup.laboratoryMedicine.to.ClinspeSequenceBean;
import com.seoulit.erp47.sup.pathology.to.ClinspeBean;

/**
 * @Package  com.seoul.erp47.sup.laboratoryMedicine.dao
 * @Class    ClinspeReceiptDAO.java
 * @Create   
 * @Author   
 * @Description
 *
 * @LastUpdated 
 */

@Service
public class LaboratoryMedicineServiceFacadeImpl implements LaboratoryMedicineServiceFacade{

	@Autowired
	private LaboratoryMedicineApplicationService LaboratoryMedicineApplicationService;
	
	
	// 검체채취(검체번호조회)
	@Override
	public ClinspeSequenceBean findMaxClinspeNo(){
		 return LaboratoryMedicineApplicationService.findMaxClinspeNo();
	}
	
	// 검체채취 조회
	@Override
	public List<ClinspeBean> findClinspeList(Map<String, String> argsMap){
		return LaboratoryMedicineApplicationService.findClinspeList(argsMap);
	}
	
	/*// 검체채취 일괄처리 
	@Override
	public void batchClinspeProcess(List<ClinspeBean> clinspeBeanList){
	    LaboratoryMedicineApplicationService.batchClinspeProcess(clinspeBeanList);
	}*/

	// 검체접수
	@Override
	public List<ClinspeReceiptBean> findClinspeReceiptList(Map<String, String> argsMap){
		return LaboratoryMedicineApplicationService.findClinspeReceiptList(argsMap);
	}
	
	/*// 검체접수 일괄처리
	@Override
	public void batchClinspeReceiptProcess(List<ClinspeReceiptBean> clinspeReceiptBeanList){
	    LaboratoryMedicineApplicationService.batchClinspeReceiptProcess(clinspeReceiptBeanList);
	}*/
}
