package com.seoulit.erp47.sup.nutritive.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.sup.nutritive.to.IngredBean;
import com.seoulit.erp47.sup.nutritive.to.NCodeBean;

public interface IngredDAO {
	/* 영양관리 식품 관리 - 코드조회 */
	List<NCodeBean> selectCodeList(Map<String, String> argsMap);

	/* 영양관리 식품 관리 - 조회 */
	List<IngredBean> selectIngredList(Map<String, String> argsMap);

	/* 영양관리 식품 관리 - 저장 */
	void updateIngred(IngredBean ingredBean);

	void updateIngredDtl(IngredBean ingredBean);

}
