package com.seoulit.erp47.sup.nutritive.service;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.sup.nutritive.to.CarteBean;
import com.seoulit.erp47.sup.nutritive.to.DCarteBean;
import com.seoulit.erp47.sup.nutritive.to.FoodBean;
import com.seoulit.erp47.sup.nutritive.to.FoodDtlBean;
import com.seoulit.erp47.sup.nutritive.to.IngredBean;
import com.seoulit.erp47.sup.nutritive.to.NCodeBean;

public interface NutritiveServiceFacade {

	/* 영양관리 음식 관리 - 조회 */
	List<FoodBean> findFoodList(Map<String, String> argsMap);

	/* 영양관리 음식 관리 - 상세조회 */
	List<FoodDtlBean> findFoodDtlList(Map<String, String> argsMap);

	/* 영양관리 음식 관리 - 코드조회 */
	List<NCodeBean> findCodeList(Map<String, String> argsMap);

	/* 영양관리 식품 관리 - 조회 */
	List<IngredBean> findIngredList(Map<String, String> argsMap);

	/* 영양관리 식품 관리 - 저장 */
	void batchIngredProcess(List<IngredBean> ingredList);

	/* 영양관리 음식 관리 - 음식등록 - 저장 */
	void batchFoodAddFormProcess(Map<String, Object> map);

	/* 영양관리 음식 관리 - 저장 */
	void batchFoodMgtFormProcess(Map<String, Object> map);

	/* 영양관리 식단 관리 - 코드조회 */
	List<NCodeBean> findDivList();

	/* 영양관리 식단 관리 - 식단조회 */
	List<CarteBean> findCarteList(Map<String, String> argsMap);

	/* 영양관리 식단 관리 - 기간별 식단조회 */
	List<DCarteBean> findDCarteList(Map<String, String> argsMap);

	/* 영양관리 식단 관리 - 저장 */
	void batchCarteProcess(Map<String, Object> map);

}
