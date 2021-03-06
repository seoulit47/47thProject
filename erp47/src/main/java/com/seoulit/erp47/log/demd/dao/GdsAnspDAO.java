package com.seoulit.erp47.log.demd.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.log.demd.to.GdsAnspBean;
import com.seoulit.erp47.log.demd.to.GdsAnspHistBean;

public interface GdsAnspDAO {
	public List<GdsAnspBean> selectGdsAnspList(Map<String, String> argsMap);
	public void insertGdsAnsp(GdsAnspBean gdsAnspbean);
    public void updateGdsAnsp(GdsAnspBean gdsAnspbean);
    public void deleteGdsAnsp(GdsAnspBean gdsAnspbean);
    
    public List<GdsAnspHistBean> selectGdsAnspHistList(Map<String, String> argsMap);
    public void insertGdsAnspHist(GdsAnspHistBean gdsAnspHistbean);
    public void updateGdsAnspHist(GdsAnspHistBean gdsAnspHistbean);
    public void deleteGdsAnspHist(GdsAnspHistBean gdsAnspHistbean);
}
