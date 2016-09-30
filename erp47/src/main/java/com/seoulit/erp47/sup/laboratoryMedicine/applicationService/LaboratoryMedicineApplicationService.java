package com.seoulit.erp47.sup.laboratoryMedicine.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.sup.laboratoryMedicine.to.ClinspeReceiptBean;
import com.seoulit.erp47.sup.laboratoryMedicine.to.ClinspeSequenceBean;
import com.seoulit.erp47.sup.pathology.to.ClinspeBean;

/**
 * @Package  com.seoulit.erp47.sup.laboratoryMedicine.applicationService
 * @Class    LaboratoryMediApplicationService.java
 * @Create   
 * @Author   
 * @Description
 *
 * @LastUpdated 
 */

public interface LaboratoryMedicineApplicationService {
	// 검체채취
	public ClinspeSequenceBean findMaxClinspeNo();
	public List<ClinspeBean> findClinspeList(Map<String, String> argsMap);
	public void batchClinspeProcess(List<ClinspeBean> clinspeBeanList);
	
	// 검체접수
	public List<ClinspeReceiptBean> findClinspeReceiptList(Map<String, String> argsMap);
	//public void batchClinspeReceiptProcess(List<ClinspeReceiptBean> clinspeReceiptBeanList);
}
