package com.seoulit.erp47.acc.vat.service;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.vat.to.TaxInvBean;
import com.seoulit.erp47.acc.vat.to.VATDeclBean;

public interface VATServiceFacade {

    List<TaxInvBean> findTaxInvList(Map<String, String> argsMap);

    void batchTaxInvProcess(List<TaxInvBean> tempTaxInvList);

   List<VATDeclBean> findVATDeclList(Map<String, String> argsMap);
}
