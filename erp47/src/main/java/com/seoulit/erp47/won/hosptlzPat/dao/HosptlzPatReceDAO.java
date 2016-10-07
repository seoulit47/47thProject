package com.seoulit.erp47.won.hosptlzPat.dao;

import java.util.Map;

import com.seoulit.erp47.won.hosptlzPat.to.HosptlzPatReceBean;

public interface HosptlzPatReceDAO {

	HosptlzPatReceBean selectHosptlzPatRece(Map<String, String> argsMap);

	void callHosptlzPatRece(HosptlzPatReceBean hosptlzPatReceBean);

}
