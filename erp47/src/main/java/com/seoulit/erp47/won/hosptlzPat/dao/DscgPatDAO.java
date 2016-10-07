package com.seoulit.erp47.won.hosptlzPat.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.won.hosptlzPat.to.DscgPatBean;

/**
 * DscgPatDAO
 *
 * @Description   퇴원환자조회 및 퇴원일 수정
 * @Author          황태경
 * Created on         2016. 6. 15.
 */

public interface DscgPatDAO {

	List<DscgPatBean> selectDscgPatList(Map<String, String> argsMap);  //퇴원환자 조회
	void updateModDscgDay(DscgPatBean dscgPatBean);  //퇴원일수정


}
