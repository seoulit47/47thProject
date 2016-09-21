package com.seoulit.erp47.hrs.emp.dao;

import java.util.List;

import com.seoulit.erp47.common.to.BaseBean;

/**
 * 
 * @Package  com.seoulit.erp47.hrs.emp.dao
 * @Class    LicenseDAO.java
 * @Create   2016. 9. 20.
 * @Author   김봉진
 * @Description
 *
 * @LastUpdated
 */

public interface LicenseDAO {
	List<BaseBean> findLicenseList(String empNo);

	void insertLicense(BaseBean licenseBean);

	void updateLicense(BaseBean licenseBean);

	void deleteLicense(BaseBean licenseBean);

	void destroyLicense(String empNo);


}
