package com.seoulit.erp47.sup.pathology.applicationService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoulit.erp47.sup.pathology.dao.ClinspeBlokDAO;
import com.seoulit.erp47.sup.pathology.dao.ClinspeInfoDAO;
import com.seoulit.erp47.sup.pathology.dao.ClinspeSliDAO;
import com.seoulit.erp47.sup.pathology.to.SlClinspeBlokBean;
import com.seoulit.erp47.sup.pathology.to.SlClinspeInfoBean;
import com.seoulit.erp47.sup.pathology.to.SlClinspeSliBean;

/**
 * @Package  com.seoul.his.sup.pathology.applicationService
 * @Class    PathologyApplicationServiceImpl.java
 * @Create   2016. 6. 10.
 * @Author   jeong
 * @Description
 *
 * @LastUpdated 
 */

@Component
public class PathologyApplicationServiceImpl implements PathologyApplicationService{
	@Autowired
	ClinspeBlokDAO clinspeBlokDAO;
	@Autowired
	ClinspeSliDAO clinspeSliDAO;
	@Autowired
	ClinspeInfoDAO clinspeInfoDAO;
	
	//검체블록 조회
	@Override
	public List<SlClinspeBlokBean> findClinspeBlokList(SlClinspeBlokBean clinspeNoBean) {
		return clinspeBlokDAO.findClinspeBlokList(clinspeNoBean);
	}
	
	//검체블록 일괄처리
	@Override
	public void batchClinspeBlokProcess(List<SlClinspeBlokBean> batchClinspeBlokBeanList) {
		for(SlClinspeBlokBean slClinspeBlokBean : batchClinspeBlokBeanList){
			switch(slClinspeBlokBean.getStatus()){
			case "inserted" : clinspeBlokDAO.insertClinspeBlok(slClinspeBlokBean); break;
			case "updated" : clinspeBlokDAO.updateClinspeBlok(slClinspeBlokBean); break;
			case "deleted" : clinspeBlokDAO.deleteClinspeBlok(slClinspeBlokBean); break;
			}
		}
	}
	
	//검체슬라이드 조회
	@Override
	public List<SlClinspeSliBean> findClinspeSliList(SlClinspeSliBean sliBean) {
		return clinspeSliDAO.findClinspeSliList(sliBean);
	}
	
	//검체슬라이드 일괄처리
	@Override
	public void batchClinspeSliProcess(List<SlClinspeSliBean> batchClinspeSliBeanList) {
		for(SlClinspeSliBean slClinspeSliBean : batchClinspeSliBeanList){
			switch(slClinspeSliBean.getStatus()){
			case "inserted" : clinspeSliDAO.insertClinspeSli(slClinspeSliBean); break;
			case "updated" : clinspeSliDAO.updateClinspeSli(slClinspeSliBean); break;
			case "deleted" : clinspeSliDAO.deleteClinspeSli(slClinspeSliBean); break;
			}
		}
	}
	
    // 검체정보 조회
	@Override
	public List<SlClinspeInfoBean> findClinspeInfoList(SlClinspeInfoBean clinspeInfoBean) {
		return clinspeInfoDAO.findClinspeInfoList(clinspeInfoBean);
	}
	
  
}