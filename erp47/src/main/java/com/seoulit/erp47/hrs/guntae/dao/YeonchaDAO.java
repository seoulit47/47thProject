package com.seoulit.erp47.hrs.guntae.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.hrs.guntae.to.YeonchaBean;

public interface YeonchaDAO {

    //각 사원 연차 조회
	List<YeonchaBean> selectYeonchaList(Map<String, String> argsMap);
	//연차발생
	List<YeonchaBean> callYeoncha(Map<String, String> argsMap);

}
