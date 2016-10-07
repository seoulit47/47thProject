package com.seoulit.erp47.won.hosptlzPat.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.won.hosptlzPat.to.GooutStayoutBean;
import com.seoulit.erp47.won.hosptlzPat.to.HosptlzPatInfoBean;

public interface GooutStayoutDAO {

	List<HosptlzPatInfoBean> selectHosptlzPat(Map<String, String> argsMap);  //입원 환자 정보 조회
	void insertGooutStayout(GooutStayoutBean gooutStayoutBean);   // 외출/외박 신청서 등록
	List<GooutStayoutBean> selectGooutStayoutList(Map<String, String> argsMap);  //외출&외박 신청서 조회.
	void updateGooutStayout(GooutStayoutBean gooutStayoutBean);   //확인승인상태변경(N->Y), 외출확인, 복귀확인
	void deleteGooutStayout(GooutStayoutBean gooutStayoutBean);   //신청서 삭제


}
