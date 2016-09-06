package com.seoulit.erp47.sup.nutritive.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.sup.nutritive.applicationService.NutritiveApplicationService;
import com.seoulit.erp47.sup.nutritive.to.CarteBean;
import com.seoulit.erp47.sup.nutritive.to.DCarteBean;
import com.seoulit.erp47.sup.nutritive.to.FoodBean;
import com.seoulit.erp47.sup.nutritive.to.FoodDtlBean;
import com.seoulit.erp47.sup.nutritive.to.IngredBean;
import com.seoulit.erp47.sup.nutritive.to.NCodeBean;

/**
 * @Package com.seoulit.erp47.sup.nutritive.service
 * @Class nutritiveServiceFacadeImpl.java
 * @Create 2016. 09.06.
 * @Author YonG
 * @Description 영양관리 서비스퍼사드
 *
 * @LastUpdated
 */

@Service
public class NutritiveServiceFacadeImpl implements NutritiveServiceFacade {
	@Autowired
	private NutritiveApplicationService nutritiveApplicationService;

	/* 영양관리 음식 관리 - 조회 */
	@Override
	public List<FoodBean> findFoodList(Map<String, String> argsMap) {
		return nutritiveApplicationService.findFoodList(argsMap);
	}

	/* 영양관리 음식 관리 - 상세조회 */
	@Override
	public List<FoodDtlBean> findFoodDtlList(Map<String, String> argsMap) {
		return nutritiveApplicationService.findFoodDtlList(argsMap);
	}

	/* 영양관리 음식 관리 - 코드조회 */
	@Override
	public List<NCodeBean> findCodeList(Map<String, String> argsMap) {
		return nutritiveApplicationService.findCodeList(argsMap);
	}

	/* 영양관리 식품 관리 - 조회 */
	@Override
	public List<IngredBean> findIngredList(Map<String, String> argsMap) {
		return nutritiveApplicationService.findIngredList(argsMap);
	}

	/* 영양관리 식품 관리 - 저장 */
	@Override
	public void batchIngredProcess(List<IngredBean> ingredList) {
		nutritiveApplicationService.batchIngredProcess(ingredList);
	}

	/* 영양관리 음식 관리 - 음식등록 - 저장 */
	@Override
	public void batchFoodAddFormProcess(Map<String, Object> map) {
		nutritiveApplicationService.batchFoodAddFormProcess(map);
	}

	@Override /* 영양관리 음식 관리 - 저장 */
	public void batchFoodMgtFormProcess(Map<String, Object> map) {
		nutritiveApplicationService.batchFoodMgtFormProcess(map);
	}

	@Override /* 영양관리 식단 관리 - 코드 조회 */
	public List<NCodeBean> findDivList() {
		return nutritiveApplicationService.findDivList();
	}

	@Override /* 영양관리 식단 관리 - 식단 조회 */
	public List<CarteBean> findCarteList(Map<String, String> argsMap) {
		return nutritiveApplicationService.findCarteList(argsMap);
	}

	@Override /* 영양관리 식단 관리 - 기간별 식단 조회 */
	public List<DCarteBean> findDCarteList(Map<String, String> argsMap) {
		return nutritiveApplicationService.findDCarteList(argsMap);
	}

	@Override /* 영양관리 식단 관리 - 저장 */
	public void batchCarteProcess(Map<String, Object> map) {
		nutritiveApplicationService.batchCarteProcess(map);
	}
}
