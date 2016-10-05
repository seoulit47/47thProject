package com.seoulit.erp47.sup.laboratoryMedicine.service;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.sup.laboratoryMedicine.to.ClinspeDeliveryBean;
import com.seoulit.erp47.sup.laboratoryMedicine.to.ClinspeReceiptBean;
import com.seoulit.erp47.sup.laboratoryMedicine.to.ClinspeSequenceBean;
import com.seoulit.erp47.sup.pathology.to.ClinspeBean;

/**
 * @Package  com.seoulit.erp47.sup.laboratoryMedicine.dao
 * @Class    ClinspeReceiptDAO.java
 * @Create   
 * @Author   
 * @Description
 * @LastUpdated 
 */

public interface LaboratoryMedicineServiceFacade {

	List<ClinspeReceiptBean> findClinspeReceiptList(Map<String, String> argsMap);
	
	ClinspeSequenceBean findMaxClinspeNo();

	List<ClinspeBean> findClinspeList(Map<String, String> argsMap);
	
	List<ClinspeBean> findNoReceiptClinspeList(Map<String, String> argsMap);
	
	List<ClinspeReceiptBean> findNoDeliveryClinspeList(Map<String, String> argsMap);
	
	void batchClinspeProcess(List<ClinspeBean> clinspeBeanList);

	void batchClinspeReceiptProcess(List<ClinspeReceiptBean> clinspeReceiptBeanList);
	
	List<ClinspeDeliveryBean> updateDeliveryClinspeStatus(Map<String, String> argsMap);
	
	List<ClinspeDeliveryBean> findDeliveryClinspeList(Map<String, String> argsMap);
	
	
}
