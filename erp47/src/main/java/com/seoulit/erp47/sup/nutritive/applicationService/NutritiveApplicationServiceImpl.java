package com.seoulit.erp47.sup.nutritive.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.sup.nutritive.dao.CarteDAO;
import com.seoulit.erp47.sup.nutritive.dao.FoodDAO;
import com.seoulit.erp47.sup.nutritive.dao.IngredDAO;
import com.seoulit.erp47.sup.nutritive.to.BreakfastBean;
import com.seoulit.erp47.sup.nutritive.to.CarteBean;
import com.seoulit.erp47.sup.nutritive.to.DCarteBean;
import com.seoulit.erp47.sup.nutritive.to.DinnerBean;
import com.seoulit.erp47.sup.nutritive.to.FoodBean;
import com.seoulit.erp47.sup.nutritive.to.FoodDtlBean;
import com.seoulit.erp47.sup.nutritive.to.IngredBean;
import com.seoulit.erp47.sup.nutritive.to.LunchBean;
import com.seoulit.erp47.sup.nutritive.to.NCodeBean;

@Service
public class NutritiveApplicationServiceImpl implements NutritiveApplicationService {
	@Autowired
	private FoodDAO foodDAO;
	@Autowired
	private IngredDAO ingredDAO;
	@Autowired
	private CarteDAO carteDAO;

	@Override /* 영양관리 음식 관리 - 조회 */
	public List<FoodBean> findFoodList(Map<String, String> argsMap) {
		System.out.println("selectFoodList"+ argsMap);
		return foodDAO.selectFoodList(argsMap);
	}

	@Override /* 영양관리 음식 관리 - 상세조회 */
	public List<FoodDtlBean> findFoodDtlList(Map<String, String> argsMap) {
		return foodDAO.selectFoodDtlList(argsMap);
	}

	@Override /* 영양관리 음식 관리 - 코드조회 */
	public List<NCodeBean> findCodeList(Map<String, String> argsMap) {
		String div = argsMap.get("formDiv");

		List<NCodeBean> codeList = null;

		if (div.equals("food")) {
			codeList = foodDAO.selectCodeList(argsMap);

		} else if (div.equals("ingred")) {
			codeList = ingredDAO.selectCodeList(argsMap);

		}
		return codeList;
	}

	@Override /* 영양관리 식품 관리 - 조회 */
	public List<IngredBean> findIngredList(Map<String, String> argsMap) {
		return ingredDAO.selectIngredList(argsMap);
	}

	@Override /* 영양관리 식품 관리 - 저장 */
	public void batchIngredProcess(List<IngredBean> ingredList) {
		for (IngredBean ingredBean : ingredList) {

			switch (ingredBean.getStatus()) {
			case "updated": ingredDAO.updateIngred(ingredBean);
							ingredDAO.updateIngredDtl(ingredBean); break;
			}
		}
	}

	@Override /* 영양관리 음식 관리 - 음식등록 - 저장 */
	public void batchFoodAddFormProcess(Map<String, Object> map) {
		List<FoodBean> foodList = (List<FoodBean>) map.get("food");
		List<FoodDtlBean> foodDtlList = (List<FoodDtlBean>) map.get("foodDtl");

		if (foodList != null) {
			for (FoodBean foodBean : foodList) {

				switch (foodBean.getStatus()) {

				case "updated": foodDAO.updateFood(foodBean); break;
				case "inserted": foodDAO.insertFood(foodBean); break;
				}
			}
		}

		if (foodDtlList != null) {

			for (FoodDtlBean foodDtlBean : foodDtlList) {

				switch (foodDtlBean.getStatus()) {

					case "updated": foodDAO.updateFoodDtl(foodDtlBean); break;
					case "inserted": foodDAO.insertFoodDtl(foodDtlBean); break;
					case "deleted": foodDAO.deleteFoodDtl(foodDtlBean); break;
				}
			}
		}
	}

	@Override
	public void batchFoodMgtFormProcess(Map<String, Object> map) {
		List<FoodBean> foodList = (List<FoodBean>) map.get("food");
		List<FoodDtlBean> foodDtlList = (List<FoodDtlBean>) map.get("foodDtl");

		if (foodList != null) {
			for (FoodBean foodBean : foodList) {
				switch (foodBean.getStatus()) {

				case "deleted": String foodGrpCd = foodBean.getFoodGrpCd();
								String foodCd = foodBean.getFoodCd();

					foodDAO.deleteFood(foodBean);
					foodDAO.deleteFoodDtl(foodBean);

					break;
				}
			}
		}

		if (foodDtlList != null) {
			for (FoodDtlBean foodDtlBean : foodDtlList) {
				switch (foodDtlBean.getStatus()) {

				case "deleted": foodDAO.deleteFoodDtl(foodDtlBean); break;
				}
			}
		}
	}

	@Override /* 영양관리 식단 관리 - 코드조회 */
	public List<NCodeBean> findDivList() {
		List<NCodeBean> divList = carteDAO.selectDivList();
		return divList;
	}

	@Override /* 영양관리 식단 관리 - 식단조회 */
	public List<CarteBean> findCarteList(Map<String, String> argsMap) {
		List<CarteBean> carteList = carteDAO.selectCarteList(argsMap);
		return carteList;
	}

	@Override /* 영양관리 식단 관리 - 기간별 식단조회 */
	public List<DCarteBean> findDCarteList(Map<String, String> argsMap) {
		List<DCarteBean> dCarteList = carteDAO.selectDCarteList(argsMap);
		return dCarteList;
	}

	@Override /* 영양관리 식단 관리 - 저장 */
	public void batchCarteProcess(Map<String, Object> map) {
		List<BreakfastBean> breakfastList = (List<BreakfastBean>) map.get("breakfast");
		List<LunchBean> lunchList = (List<LunchBean>) map.get("lunch");
		List<DinnerBean> dinnerList = (List<DinnerBean>) map.get("dinner");

		if (breakfastList != null) {
			for (BreakfastBean breakfastBean : breakfastList) {
				switch (breakfastBean.getStatus()) {
				case "inserted": carteDAO.insertCarte(breakfastBean); break;
				case "deleted": carteDAO.deleteCarte(breakfastBean); break;
				}
			}
		}

		if (lunchList != null) {
			for (LunchBean lunchBean : lunchList) {
				switch (lunchBean.getStatus()) {
				case "inserted": carteDAO.insertCarte(lunchBean); break;
				case "deleted": carteDAO.deleteCarte(lunchBean); break;
				}
			}
		}

		if (dinnerList != null) {
			for (DinnerBean dinnerBean : dinnerList) {
				switch (dinnerBean.getStatus()) {
				case "inserted": carteDAO.insertCarte(dinnerBean); break;
				case "deleted": carteDAO.deleteCarte(dinnerBean); break;
				}
			}
		}
	}
}