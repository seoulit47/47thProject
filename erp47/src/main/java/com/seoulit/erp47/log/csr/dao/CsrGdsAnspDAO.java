package com.seoulit.erp47.log.csr.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.log.demd.to.GdsAnspBean;
import com.seoulit.erp47.log.demd.to.GdsAnspHistBean;

public interface CsrGdsAnspDAO {
    List<GdsAnspBean> selectCsrGdsAnspList(Map<String, String> argsMap); //청구출고조회
    void updatedRlsGdsAnspList(GdsAnspBean lwGdsAnspBean); 
    void updatePstRlsList(GdsAnspHistBean lwGdsAnspHistBean);
}
