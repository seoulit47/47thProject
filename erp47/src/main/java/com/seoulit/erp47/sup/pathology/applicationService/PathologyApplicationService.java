package com.seoulit.erp47.sup.pathology.applicationService;

import java.util.List;

import com.seoulit.erp47.sup.pathology.to.ClinspeBean;
import com.seoulit.erp47.sup.pathology.to.SlClinspeBlokBean;
import com.seoulit.erp47.sup.pathology.to.SlClinspeInfoBean;
import com.seoulit.erp47.sup.pathology.to.SlClinspeSliBean;



/**
 * @Package  com.seoulit.erp47.sup.pathology.AS
 * @Class    PathologyApplicationService.java
 * @Create   2016. 09. 20.
 * @Author   김진환
 * @Description 검체 
 *
 * @LastUpdated 
 */

public interface PathologyApplicationService {
	//검체블록 조회,일괄처리
	List<SlClinspeBlokBean> findClinspeBlokList(SlClinspeBlokBean clinspeNoBean);
	void batchClinspeBlokProcess(List<SlClinspeBlokBean> batchClinspeBlokBeanList);
	//검체슬라이드 조회,일괄처리
	List<SlClinspeSliBean> findClinspeSliList(SlClinspeSliBean sliBean);
	void batchClinspeSliProcess(List<SlClinspeSliBean> batchClinspeSliBeanList);
	//검체정보 조회
	List<SlClinspeInfoBean> findClinspeInfoList(SlClinspeInfoBean clinspeInfoBean);
	//검체번호 조회
	List<ClinspeBean> findClinspeNoList();
}
