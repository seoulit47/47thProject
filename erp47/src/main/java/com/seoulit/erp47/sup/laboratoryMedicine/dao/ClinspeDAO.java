package com.seoulit.erp47.sup.laboratoryMedicine.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.sup.laboratoryMedicine.to.ClinspeSequenceBean;
import com.seoulit.erp47.sup.pathology.to.ClinspeBean;

/**
 * @Package  com.seoulit.erp47.sup.laboratoryMedicine.dao
 * @Class    ClinspeDAO.java
 * @Create   
 * @Author   
 * @Description
 *
 * @LastUpdated 
 */

public interface ClinspeDAO {
	public ClinspeSequenceBean selectMaxClinspeNo();
	public List<ClinspeBean> selectClinspeList(Map<String, String> argsMap);
	public void insertClinspe(ClinspeBean expTgmBean);
	public void deleteClinspe(ClinspeBean expTgmBean);
	public void updateClinspe(ClinspeBean expTgmBean);
    public void insertClinspeBlok(ClinspeBean clinspeBean);
}







