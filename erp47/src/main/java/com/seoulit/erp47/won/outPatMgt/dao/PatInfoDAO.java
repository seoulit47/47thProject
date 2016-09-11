package com.seoulit.erp47.won.outPatMgt.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.won.outPatMgt.to.PatInfoBean;

public interface PatInfoDAO {

	public List<PatInfoBean> selectPatList(Map<String, String> argsMap);
	public PatInfoBean selectPat(Map<String, String> argsMap);
	/*
	
    public void updatePat(PatInfoBean patInfoBean);
    public void insertPat(PatInfoBean patInfoBean);
    public PatInfoBean selectLastPatNo();
    public void insertPatNo();*/

}
