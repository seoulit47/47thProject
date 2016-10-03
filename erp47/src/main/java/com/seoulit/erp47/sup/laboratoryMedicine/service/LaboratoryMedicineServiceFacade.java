package com.seoulit.erp47.sup.laboratoryMedicine.service;

import java.util.List;
import java.util.Map;

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

	public List<ClinspeReceiptBean> findClinspeReceiptList(Map<String, String> argsMap);
	
	public ClinspeSequenceBean findMaxClinspeNo();

	public List<ClinspeBean> findClinspeList(Map<String, String> argsMap);

	public void batchClinspeProcess(List<ClinspeBean> clinspeBeanList);

	public void batchClinspeReceiptProcess(List<ClinspeReceiptBean> clinspeReceiptBeanList);
}
