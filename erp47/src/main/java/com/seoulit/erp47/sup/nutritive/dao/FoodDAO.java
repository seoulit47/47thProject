package com.seoulit.erp47.sup.nutritive.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.sup.nutritive.to.FoodBean;
import com.seoulit.erp47.sup.nutritive.to.FoodDtlBean;
import com.seoulit.erp47.sup.nutritive.to.NCodeBean;

public interface FoodDAO {
	/* 영양관리 음식 관리 - 조회 */
	List<FoodBean> selectFoodList(Map<String, String> argsMap);

	/* 영양관리 음식 관리 - 상세조회 */
	List<FoodDtlBean> selectFoodDtlList(Map<String, String> argsMap);

	/* 영양관리 음식 관리 - 코드조회 */
	List<NCodeBean> selectCodeList(Map<String, String> argsMap);

	/* 영양관리 음식 관리 - 음식등록 - 저장 */
	void updateFoodDtl(FoodDtlBean foodDtlBean);

	void insertFoodDtl(FoodDtlBean foodDtlBean);

	void updateFood(FoodBean foodBean);

	void insertFood(FoodBean foodBean);

	void deleteFoodDtl(FoodDtlBean foodDtlBean);

	/* 영양관리 음식 관리 - 저장 */
	void deleteFood(FoodBean foodBean);

	void deleteFoodDtl(FoodBean foodBean);

}
