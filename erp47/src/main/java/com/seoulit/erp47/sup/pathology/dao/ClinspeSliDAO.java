package com.seoulit.erp47.sup.pathology.dao;

import java.util.List;

import com.seoulit.erp47.sup.pathology.to.SlClinspeSliBean;



public interface ClinspeSliDAO {
	//검체슬라이드 조회,일괄처리
	List<SlClinspeSliBean> findClinspeSliList(SlClinspeSliBean sliBean);
	void insertClinspeSli(SlClinspeSliBean slClinspeSliBean);
	void updateClinspeSli(SlClinspeSliBean slClinspeSliBean);
	void deleteClinspeSli(SlClinspeSliBean slClinspeSliBean);

}
