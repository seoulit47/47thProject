package com.seoulit.erp47.won.hosptlzPat.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.won.hosptlzPat.to.GooutStayoutBean;
import com.seoulit.erp47.won.hosptlzPat.to.HosptlzPatInfoBean;

/**
 *    GooutStayoutAS
 *
 * @Description	  외출,외박 관리 (신청서 접수, 환자 외출/외박 관리)
 * @Author            황태경
 * Created on          2016. 6. 14.
 */
public interface GooutStayoutApplicationService {

	List<HosptlzPatInfoBean> findHosptlzPat(Map<String, String> argsMap);   //입원환자정보 조회
	void batchProcessGooutStayout(List<GooutStayoutBean> gooutStayout);  //외출/외박 신청등록
	List<GooutStayoutBean> findGooutStayoutList(Map<String, String> argsMap); //외출&외박 신청서 조회.

}
