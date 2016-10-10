package com.seoulit.erp47.med.base.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.med.base.to.CutnRltnExmntBean;

public interface CutnRltnExmntDAO {
    List<CutnRltnExmntBean> selectCutnRltnExmntList(Map<String, String> argsMap);	//주의사항 관련검사 조회   
    void insertCutnRltnExmnt(CutnRltnExmntBean cutnRltnExmntBean);//주의사항 관련검사 BATCH
    void deleteCutnRltnExmnt(CutnRltnExmntBean cutnRltnExmntBean);
}
