package com.seoulit.erp47.sup.laboratoryMedicine.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.sup.laboratoryMedicine.to.ClinspeReceiptBean;

/**
 * @Package  com.seoullt.erp47.sup.laboratoryMedicine.dao
 * @Class    ClinspeReceiptDAO.java
 * @Create   
 * @Author   
 * @Description
 *
 * @LastUpdated 
 */

public interface ClinspeReceiptDAO {
	public List<ClinspeReceiptBean> selectClinspeReceiptList(Map<String, String> argsMap);
	public void insertClinspeReceipt(ClinspeReceiptBean clinspeReceiptBean);
	public void deleteClinspeReceipt(ClinspeReceiptBean clinspeReceiptBean);
	public void updateClinspeReceipt(ClinspeReceiptBean clinspeReceiptBean);
	public void insertClinspeReceiptCancel(ClinspeReceiptBean clinspeReceiptBean);
	public void deleteClinspeReceiptCancel(ClinspeReceiptBean clinspeReceiptBean);
	public void updateClinspeReceiptCancel(ClinspeReceiptBean clinspeReceiptBean);
}







