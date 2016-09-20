package com.seoulit.erp47.sup.pathology.service;

import java.util.List;

import com.seoulit.erp47.sup.pathology.to.SlClinspeBlokBean;
import com.seoulit.erp47.sup.pathology.to.SlClinspeInfoBean;
import com.seoulit.erp47.sup.pathology.to.SlClinspeSliBean;



public interface PathologyServiceFacade {
	
	//검체정보 조회,일괄처리
	List<SlClinspeBlokBean> findClinspeBlokList(SlClinspeBlokBean clinspeNoBean);
	void batchClinspeBlokProcess(List<SlClinspeBlokBean> batchClinspeBlokBeanList);
	
	//검체슬라이드 조회
	List<SlClinspeSliBean> findClinspeSliList(SlClinspeSliBean sliBean);
	void batchClinspeSliProcess(List<SlClinspeSliBean> batchClinspeSliBeanList);
	
	//검체정보조회
	List<SlClinspeInfoBean> findClinspeInfoBeanList(SlClinspeInfoBean clinspeInfoBean);
	
	//검체번호 조회
	//List<ClinspeBean> findClinspeNoList();

}
