package com.seoulit.erp47.med.base.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.med.base.to.PatCutnBean;

public interface PatCutnDAO {
    List<PatCutnBean> selectPatCutnList(Map<String, String> argsMap);				//환자 주의사항 조회
    void insertPatCutn(PatCutnBean patCutnBean);// 환자 주의사항 BATCH  
    void deletePatCutn(PatCutnBean patCutnBean);
}
