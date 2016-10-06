package com.seoulit.erp47.sup.pathology.dao;

import java.util.Map;



public interface DeliveredClinspeDAO {
	//검체 인수
	void updateDeliveredClinspeStatus(Map<String,String> argsMap);
	
	void insertRefuseDeliveredClinspe(Map<String,String> argsMap);

}
