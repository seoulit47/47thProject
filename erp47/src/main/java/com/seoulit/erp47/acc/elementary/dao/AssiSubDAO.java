package com.seoulit.erp47.acc.elementary.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.elementary.to.AssiSubBean;


public interface AssiSubDAO {
   
	List<AssiSubBean> selectAssiSubList(Map<String, String> argsMap);

	void insertAssiSub(AssiSubBean assiSubBean);

    void deleteAssiSub(AssiSubBean assiSubBean);

    void updateAssiSub(AssiSubBean assiSubBean);
}
