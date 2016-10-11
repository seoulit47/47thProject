package com.seoulit.erp47.med.base.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.med.base.to.PatCutnHistBean;

public interface PatCutnHistDAO {
    List<PatCutnHistBean> selectPatCutnHistList(Map<String, String> argsMap);		//환자 주의사항 수정내역 조회             
    void insertPatCutnHist(PatCutnHistBean patCutnHistBean);// 환자 주의사항 수정내역 BATCH  

}
