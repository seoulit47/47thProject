package com.seoulit.erp47.med.recipe.dao;

import java.util.HashMap;
import java.util.List;

import com.seoulit.erp47.common.to.SearchConditionBean;
import com.seoulit.erp47.med.recipe.to.SurgBookBean;



/**
 * @Package  com.seoul.his.med.recipe.dao
 * @Class    MpSurgBookDAO.java
 * @Create   2016. 10. 13.
 * @Author   
 * @Description 수술예약 DAO
 *
 * @LastUpdated
 */

public interface SurgBookDAO {
    //수술예약 조회
	List<SurgBookBean> selectMpSurgBookList(HashMap<String, List<SearchConditionBean>> searchConditionMap);
	//수술예약 저장
	void insertMpSurgBook(SurgBookBean mpSurgBookBean);

	void updateMpSurgBook(SurgBookBean mpSurgBookBean);

	void deleteMpSurgBook(SurgBookBean mpSurgBookBean);

}
