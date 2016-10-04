package com.seoulit.erp47.sup.laboratoryMedicine.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.sup.laboratoryMedicine.to.ClinspeReceiptBean;

/**
 * @Package  com.seoullt.erp47.sup.laboratoryMedicine.dao
 * @Class    ClinspeDeliveryDAO.java
 * @Create   
 * @Author   
 * @Description
 *
 * @LastUpdated 
 */

public interface ClinspeDeliveryDAO {
	public List<ClinspeReceiptBean> selectNoDeliveryClinspeList(Map<String, String> argsMap);
	public void updateDeliveryClinspeStatus(Map<String, String> argsMap);
	public void insertDeliveryClinspe(Map<String, String> argsMap);
	public void callDeliveryClinspe(Map<String, Object> procedureMap);
}







