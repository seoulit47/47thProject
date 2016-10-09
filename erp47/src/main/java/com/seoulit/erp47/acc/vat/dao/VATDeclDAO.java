package com.seoulit.erp47.acc.vat.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.vat.to.VATDeclBean;

public interface VATDeclDAO {

    List<VATDeclBean> selectVATDeclList(Map<String, String> argsMap);

}
