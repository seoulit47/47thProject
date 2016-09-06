package com.seoulit.erp47.sup.nutritive.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.sup.nutritive.to.BreakfastBean;
import com.seoulit.erp47.sup.nutritive.to.CarteBean;
import com.seoulit.erp47.sup.nutritive.to.DCarteBean;
import com.seoulit.erp47.sup.nutritive.to.DinnerBean;
import com.seoulit.erp47.sup.nutritive.to.LunchBean;
import com.seoulit.erp47.sup.nutritive.to.NCodeBean;

public interface CarteDAO {
	/* 영양관리 식단 관리 - 코드조회 */
	List<NCodeBean> selectDivList();

	/* 영양관리 식단 관리 - 식단조회 */
	List<CarteBean> selectCarteList(Map<String, String> argsMap);

	/* 영양관리 식단 관리 - 기간별 식단조회 */
	List<DCarteBean> selectDCarteList(Map<String, String> argsMap);

	/* 영양관리 식단 관리 - 저장 */
	void insertCarte(BreakfastBean breakfastBean);

	void deleteCarte(BreakfastBean breakfastBean);

	void insertCarte(LunchBean lunchBean);

	void deleteCarte(LunchBean lunchBean);

	void insertCarte(DinnerBean dinnerBean);

	void deleteCarte(DinnerBean dinnerBean);

}
