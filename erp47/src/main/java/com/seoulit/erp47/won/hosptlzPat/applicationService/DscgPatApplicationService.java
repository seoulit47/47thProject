package com.seoulit.erp47.won.hosptlzPat.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.won.hosptlzPat.to.DscgPatBean;

/**
 * DscgPatAS.java
 *
  * @Description   퇴원환자조회 및 퇴원일 수정
 * @Author           박 영 희
 * Created on         2016. 10. 08.
 */


public interface DscgPatApplicationService {

	List<DscgPatBean> findDscgPatList(Map<String, String> argsMap);  //퇴원환자 조회
	void modDscgDay(List<DscgPatBean> dscgPat);  //퇴원일수정


}
