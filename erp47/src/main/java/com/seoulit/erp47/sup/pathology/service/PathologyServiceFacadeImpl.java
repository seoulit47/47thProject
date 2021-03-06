package com.seoulit.erp47.sup.pathology.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.sup.pathology.applicationService.PathologyApplicationService;
import com.seoulit.erp47.sup.pathology.to.ClinspeBean;
import com.seoulit.erp47.sup.pathology.to.SlClinspeBlokBean;
import com.seoulit.erp47.sup.pathology.to.SlClinspeInfoBean;
import com.seoulit.erp47.sup.pathology.to.SlClinspeSliBean;



@Service
public class PathologyServiceFacadeImpl implements PathologyServiceFacade{
    
	@Autowired
	PathologyApplicationService pathologyApplicationService;
	
	//검체블록 조회
	@Override
	public List<SlClinspeBlokBean> findClinspeBlokList(SlClinspeBlokBean clinspeNoBean) {
		// TODO Auto-generated method stub
		List<SlClinspeBlokBean> clinspeBlokList = pathologyApplicationService.findClinspeBlokList(clinspeNoBean);
		return clinspeBlokList;
	}
	
	//검체블록 일괄처리
	@Override
	public void batchClinspeBlokProcess(List<SlClinspeBlokBean> batchClinspeBlokBeanList) {
		// TODO Auto-generated method stub
		pathologyApplicationService.batchClinspeBlokProcess(batchClinspeBlokBeanList);
	}
	
	//검체슬라이드 조회
	@Override
	public List<SlClinspeSliBean> findClinspeSliList(SlClinspeSliBean sliBean) {
		// TODO Auto-generated method stub
		List<SlClinspeSliBean> clinspeSliList = pathologyApplicationService.findClinspeSliList(sliBean);
		return clinspeSliList;
	}
	
	//검체슬라이드 일괄처리
	@Override
	public void batchClinspeSliProcess(List<SlClinspeSliBean> batchClinspeSliBeanList) {
		// TODO Auto-generated method stub
		pathologyApplicationService.batchClinspeSliProcess(batchClinspeSliBeanList);
	}
	
	//검체정보 조회
	@Override
	public List<SlClinspeInfoBean> findClinspeInfoBeanList(SlClinspeInfoBean clinspeInfoBean) {
		List<SlClinspeInfoBean> clinspeInfoList = pathologyApplicationService.findClinspeInfoList(clinspeInfoBean);
		return clinspeInfoList;
	}
	
	//검체번호 조회
	@Override
	public List<ClinspeBean> findClinspeNoList() {
		List<ClinspeBean> clinspeNoList = pathologyApplicationService.findClinspeNoList();
		return clinspeNoList;
	}

	@Override
	public void updateDeliveredClinspeStatus(Map<String, String> argsMap) {
		pathologyApplicationService.updateDeliveredClinspeStatus(argsMap);
	}

	@Override
	public void refuseDeliveredClinspe(Map<String, String> argsMap) {
		pathologyApplicationService.refuseDeliveredClinspe(argsMap);
	}
	
	
}
