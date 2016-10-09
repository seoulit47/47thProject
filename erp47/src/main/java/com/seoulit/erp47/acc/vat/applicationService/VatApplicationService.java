package com.seoulit.erp47.acc.vat.applicationService;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.vat.to.TaxInvBean;
import com.seoulit.erp47.acc.vat.to.VATDeclBean;

public interface VatApplicationService {

    List<TaxInvBean> findTaxInvList(Map<String, String> argsMap);

    void batchTaxInvProcess(List<TaxInvBean> taxInvList);
    
    List<VATDeclBean> findVATDeclList(Map<String, String> argsMap);
}
