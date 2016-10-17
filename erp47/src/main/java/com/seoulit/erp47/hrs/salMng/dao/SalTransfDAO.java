package com.seoulit.erp47.hrs.salMng.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.hrs.salMng.to.SalTransfBean;

public interface SalTransfDAO {

    List<SalTransfBean> findSalTransfList(Map<String, String> argsMap);

}
